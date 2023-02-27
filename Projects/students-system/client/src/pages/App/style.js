import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 10.0rem auto;
    grid-template-areas: 
    'header'
    'content';

    width: 100%;
    height: 100vh;

    & main {
        grid-area: content;
        overflow-y: auto;

        padding: 4.8rem 0;
    }
`;

export const MainArticle = styled.article`
    max-width: 64.0rem;
    margin: 0 auto;
`;