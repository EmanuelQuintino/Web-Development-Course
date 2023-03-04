import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: ${({MenuActive}) => MenuActive ? "hidden" : "auto"};
`;

export const MainArticle = styled.article`
    max-width: 32.0rem;
    margin: 0 auto;
    padding: 2.4rem .0rem;

    text-align: justify;
`;

export const Footer = styled.div`
    background: ${({theme}) => theme.colors.background};
    border-top: .4rem solid ${({theme}) => theme.colors.neutral8};
`;