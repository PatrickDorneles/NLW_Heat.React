import { UserModel } from '@models/user'
import styled from 'styled-components'

export const AppContainer = styled.main`
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 453px;
    column-gap: 120px;

    position: relative;

    ${(props: { user: UserModel | null }) => props.user ? `
        &::before {
            content: '';
            height: 100vh;
            width: 420px;
            background: url(src/assets/background.svg) no-repeat;
            background-size: cover;
            position: absolute;
            right: -200px;
            top: 0;
        }
    
    ` : ''}
`