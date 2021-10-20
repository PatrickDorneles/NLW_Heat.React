import LogoImage from '@assets/logo.svg';
import { Message, MessageContent, MessageListContainer, MessageUList, MessageUser, UserImage } from './styles';

export function MessageList() {
    return (
        <MessageListContainer>
            <img src={LogoImage} alt="DoWhile 2021" />
            <MessageUList>
                <Message>
                    <MessageContent>
                        Vai ser o melhor evento do ano 🚀🚀🚀
                    </MessageContent>
                    <MessageUser>
                        <UserImage>
                            <img src="https://github.com/PatrickDorneles.png" alt="Patrick Dorneles" />
                        </UserImage>
                        <span>Patrick Dorneles</span>
                    </MessageUser>
                </Message>

                <Message>
                    <MessageContent>
                        Só por dezembro chegar 🔥🔥🔥    
                    </MessageContent>
                    <MessageUser>
                        <UserImage>
                            <img src="https://github.com/PatrickDorneles.png" alt="Patrick Dorneles" />
                        </UserImage>
                        <span>Patrick Dorneles</span>
                    </MessageUser>
                </Message>

                <Message>
                    <MessageContent>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta suscipit incidunt, praesentium ipsa alias ex fugit quasi at quibusdam eaque cupiditate molestiae ut quidem! Nihil impedit fugit iure quo perspiciatis.
                    </MessageContent>
                    <MessageUser>
                        <UserImage>
                            <img src="https://github.com/PatrickDorneles.png" alt="Patrick Dorneles" />
                        </UserImage>
                        <span>Patrick Dorneles</span>
                    </MessageUser>
                </Message>
            </MessageUList>
        </MessageListContainer>
    )
}