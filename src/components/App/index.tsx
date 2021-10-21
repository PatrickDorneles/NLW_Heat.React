import { AppContainer } from './styles'
import { AuthContext } from '@contexts/auth'
import { LoginBox } from '@components/LoginBox'
import { MessageList } from '@components/MessageList'
import { SendMessageForm } from '@components/SendMessageForm'
import { useContext } from 'react'

export function App() {

	const {user} = useContext(AuthContext)

	return (
		<AppContainer user={user}>
			<MessageList />
			{ user ? <SendMessageForm /> : <LoginBox /> }
		</AppContainer>
	)
}
