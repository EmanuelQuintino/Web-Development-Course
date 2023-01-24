import styled from 'styled-components'

export const Container = styled.div `
    height: 100vh;
    display: grid;
    place-content: center;
    
    h1 {
        margin-top: 2.4rem;
        font-size: 48px;
        text-align: center;
    }
    
    img {
        width: 120px;
        margin: 2.4rem auto;
    }

    form {
        max-width: 32.0rem;
        margin: 0 auto;
        text-align: center;
    }

    form section {
        margin-top: .8rem;
    }

    form label {
        display: inline-block;
        width: 5.6rem;
        text-align: right;
    }

    form button {
        width: 12.0rem;
        margin: .8rem auto;
        border-radius: .8rem;

        background: none;
        outline: none;
        border: none;

        color: ${({ theme }) => theme.color.complementary};
        font-weight: 600;
        text-shadow: .02rem .02rem .1rem black;
        font-size: 2.0rem;
    }

    button:hover {
        filter: brightness(1.2);
    }
`;