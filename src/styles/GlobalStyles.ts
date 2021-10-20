import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: white;
        font-family: 'Roboto';
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;

        background-color: #1e1e1e;
    }
`