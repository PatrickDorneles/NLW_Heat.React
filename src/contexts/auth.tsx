import { ReactNode, createContext, useEffect, useState } from 'react'

import { UserModel } from '@models/user'
import { api } from 'src/services/api'

type AuthContextData = {
  user: UserModel | null
  signInUrl: string
  signOut(): void
}

export const AuthContext = createContext({} as AuthContextData)

interface Props {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
	const [user, setUser] = useState<UserModel | null>(null)

	const signInUrl = 'http://localhost:9090/github'

	async function singIn(code: string) {
		type SignInResponse = { token: string, user: UserModel }

		const response = await api.post<SignInResponse>('/signin/authenticate', {
			code
		})
		const { token, user } = response.data
						
		localStorage.setItem('@dowhile:token', token)

		api.defaults.headers.common.authorization = `Bearer ${token}`

		setUser(user)
	}

	function signOut() {
		setUser(null)
		sessionStorage.removeItem('@dowhile:token')
	}

	useEffect(() => {
		const token = localStorage.getItem('@dowhile:token')

		if(token) {
			api.defaults.headers.common.authorization = `Bearer ${token}`
      type ProfileResponse = UserModel

      api.get<ProfileResponse>('user/profile')
      	.then((response) => {
      	setUser(response.data)
      	})
		}
	}, [])

	useEffect(() => {
		const url = window.location.href
		const hasGithubCode = url.includes('?code=')

		if(hasGithubCode) {
			const [urlWithoutCode, githubCode] = url.split('?code=')
			
			window.history.pushState({}, '', urlWithoutCode)
			
			singIn(githubCode)
		}
	}, [])

	return (
		<AuthContext.Provider value={{ signInUrl, user, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}