import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 12.0rem auto;
    grid-template-areas: 
    'header'
    'content';

    width: 100%;
    height: 100vh;

    & main {
        display: grid;
        grid-template-columns: 20.0rem auto;
        grid-template-rows: auto 10.0rem;
        grid-template-areas: 
        "menu MainArticle"
        "menu footer";
        
        grid-area: content;
        overflow-y: auto;
    }
`;

export const Menu = styled.div`
    grid-area: menu;
    background: ${({theme}) => theme.colors.neutral8};

    display: grid;
    place-content: center;

    & ul {
        list-style: none;

        display: grid;
        gap: 5.6rem;

        font-size: 2.0rem;
        font-weight: 600;
        text-align: center;
    }

    & a {
        padding: .8rem;
        border-radius: .4rem;
    }

    & a:hover {
        border-bottom: 4px solid ${({theme}) => theme.colors.neutral9};
    }
`;

export const MainArticle = styled.article`
    grid-area: MainArticle;

    max-width: 64.0rem;
    margin: 0 auto;
    padding: 2.4rem;

    text-align: justify;
`;

export const Footer = styled.div`
    grid-area: footer;
    background: ${({theme}) => theme.colors.background};

    border-top: .4rem solid ${({theme}) => theme.colors.neutral8};
`;