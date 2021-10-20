import { LoginBox } from '@components/LoginBox';
import { MessageList } from '@components/MessageList';
import { AppContainer } from "./styles";

export function App() {

  return (
    <AppContainer>
      <MessageList />
      <LoginBox />
    </AppContainer>
  )
}
