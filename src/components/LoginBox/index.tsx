import { AuthContext } from '@contexts/auth'
import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { LoginBoxContainer, SignInWithGithub } from './styles'

export function LoginBox() {
	const { signInUrl, user } = useContext(AuthContext)

	return (
		<LoginBoxContainer>

			<strong>Entre e compartilhe sua mensagem!</strong>
			<SignInWithGithub href={signInUrl}>
				<VscGithubInverted size="24" />
                Entrar com Github
			</SignInWithGithub>
		</LoginBoxContainer>
	)
}