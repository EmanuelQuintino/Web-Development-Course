import styled from 'styled-components'

export const Container = styled.div `
    height: 100vh;
    display: grid;
    place-content: center;

    max-width: 42.0rem;
    margin: 0 auto;
    
    h1 {
        margin-top: 2.4rem;
        font-size: 3.2rem;
        text-align: center;
    }
    
    img {
        width: 12.0rem;
        margin: 2.4rem auto;
    }
`;