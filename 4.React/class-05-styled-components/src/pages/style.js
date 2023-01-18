import styled from 'styled-components'

export const Container = styled.div `
    /* background: #252525; */
    /* color: #fff; */
    /* text-align: center; */
    /* padding: 16px 16px 2.4rem; */

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

    select {
        width: 12.0rem;
        margin: 1.6rem auto;
        background: #808080;
    }

    button {
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