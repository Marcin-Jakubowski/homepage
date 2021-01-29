import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        color: ${({theme}) => theme.color.mainFont};
        background: ${({theme}) => theme.color.background};
        margin: 0;
        padding: 0;
    }
`;