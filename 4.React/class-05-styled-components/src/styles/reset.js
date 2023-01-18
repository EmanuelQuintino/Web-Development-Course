import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, textarea, select {
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
        color: ${(props) => props.theme.color.font};
    }

    body {
        background-color: ${({theme}) => theme.color.background};
    }

    a {
        text-decoration: none;
        color: white;
    }
    
    button {
      cursor: pointer;
      transition: background 0.2;
    }
`;