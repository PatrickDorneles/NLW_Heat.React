import { Message, MessageContent, MessageListContainer, MessageUList, MessageUser, UserImage } from './styles'
import { useEffect, useState } from 'react'

import LogoImage from '@assets/logo.svg'
import { MessageModel } from '@models/message'
import { api } from '@services/api'
import io from 'socket.io-client'

const messagesQueue: MessageModel[] = []

const socket = io('http://localhost:9090')

socket.on('new_message', (message: MessageModel) => {
	messagesQueue.push(message)
})

export function MessageList() {
	const [messages, setMessages] = useState<MessageModel[]>([])
	
	useEffect(() => {
		const timer = setInterval(() => {
			if(messagesQueue.length > 0) {
				setMessages(prevState => {
					return [
						messagesQueue[0],
						prevState[0],
						prevState[1]
					].filter(Boolean)
				})

				messagesQueue.shift()
			}
		}, 3000)
	}, [])

	useEffect(() => {
		api
			.get<MessageModel[]>('/message/last3')
			.then(response => {
				setMessages(response.data)
			})
	}, [])

	return (
		<MessageListContainer>
			<img src={LogoImage} alt="DoWhile 2021" />
			<MessageUList>
				{messages.map((message) => (
					<Message key={message.id}>
						<MessageContent>{message.text}</MessageContent>
						<MessageUser>
							<UserImage>
								<img src={message.user.avatar_url} alt={message.user.name} />
							</UserImage>
							<span>{message.user.name}</span>
						</MessageUser>
					</Message>
				))}
			</MessageUList>
		</MessageListContainer>
	)
}