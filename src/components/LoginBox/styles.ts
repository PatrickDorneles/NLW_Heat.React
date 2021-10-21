import styled from 'styled-components'

export const LoginBoxContainer = styled.div`
    height: 100vh;
    width: 100%; 
    background: #17171a url('src/assets/banner-girl.png') no-repeat center top;

    padding: 440px 80px 0;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
        font-size: 32px;
        line-height: 36px;
    }
`

export const SignInWithGithub = styled.a`
    background: #ffcd1e;
    margin-top: 32px;
    padding: 0 40px;
    height: 56px;
    color: #09090a;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        filter: brightness(0.9);
    }

    svg {
        margin-right: 16px;
        fill: #09090a;
    }
`