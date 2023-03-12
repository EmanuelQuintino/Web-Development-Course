import { createGlobalStyle } from "styled-components";

export const ResetStyled = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, input, button, textarea, select {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
    }
`;