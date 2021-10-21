import { FormEvent, useContext, useState } from 'react'
import { MessageForm, SendMessageFormContainer, SignOutButton, UserGithub, UserImage, UserInformation, UserName } from './styles'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'

import { AuthContext } from '@contexts/auth'
import { api } from 'src/services/api'

export function SendMessageForm() {
	const { user, signOut } = useContext(AuthContext)
	const [message, setMessage] = useState('')

	async function handleSendMessage(event: FormEvent) {
		event.preventDefault()

		if(!message.trim()) {
			return
		}

		await api.post('message', {
			text: message
		})

		setMessage('')
	}

	return (
		<SendMessageFormContainer >
			<SignOutButton onClick={signOut}> 
				<VscSignOut size="24" />
			</SignOutButton>

			<UserInformation>
				<UserImage>
					<img src={user?.avatar_url} alt={user?.name} />
				</UserImage>
				<UserName>{user?.name}</UserName>
				<UserGithub>
					<VscGithubInverted size="16" />
					{user?.login}
				</UserGithub>
			</UserInformation>
			<MessageForm onSubmit={handleSendMessage}>
				<label htmlFor="message">Mensagem</label>
				<textarea 
					name="message" 
					id="message" 
					placeholder="Qual a sua expectativa para o evento"
					value={message}
					onChange={(event) => setMessage(event.target.value)}
				/>
				<button type="submit">Enviar Mensagem</button>
			</MessageForm>
		</SendMessageFormContainer>
	)
}