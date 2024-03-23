import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body  {
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    input, button, textarea, select {
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
    }
`;