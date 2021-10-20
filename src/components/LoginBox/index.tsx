import { VscGithubInverted } from 'react-icons/vsc';
import { LoginBoxContainer, SignInWithGithub } from './styles';

export function LoginBox() {
    return (
        <LoginBoxContainer>

            <strong>Entre e compartilhe sua mensagem!</strong>
            <SignInWithGithub>
                <VscGithubInverted size="24" />
                Entrar com Github
            </SignInWithGithub>
        </LoginBoxContainer>
    );
}