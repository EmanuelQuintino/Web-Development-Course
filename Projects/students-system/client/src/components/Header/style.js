import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 2.4rem;
    border-bottom: .4rem solid ${({theme}) => theme.colors.neutral8};

    background: ${({theme}) => theme.colors.background};
    color: white;

    .menuIcon {
        font-size: 2.4rem;
        color: ${({theme}) => theme.colors.neutral8};
    }
    
    .menuIconClose {
        font-size: 2.4rem;
        color: ${({theme}) => theme.colors.neutral8};
    }

    .logoMenu {
        display: flex;
        align-items: center;
        gap: .4rem;
    }

    .logoMenu div {
        text-align: end;
    }

    & h1 {
        font-size: 1.6rem;
        line-height: 2.4rem;
    }

    & h3 {
        font-weight: 500;
        font-size: 1.4rem;
        color: ${({theme}) => theme.colors.neutral8};
    }

    img {
        width: 4.8rem;
    }
`;