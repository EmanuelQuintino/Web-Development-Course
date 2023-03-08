import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10.0rem;
    width: 100%;
    padding: 2.4rem;
    border-bottom: .4rem solid ${({theme}) => theme.colors.neutral8};
    background: ${({theme}) => theme.colors.background};
    color: white;

    button {
        background: none;
        border: none;
    }

    .menuIcon {
        font-size: 2.4rem;
        color: ${({theme}) => theme.colors.neutral8};
        cursor: pointer;
    }

    .logoMenu {
        display: flex;
        align-items: center;
        gap: .4rem;
    }

    .logoMenu div {
        text-align: end;
    }

    h1 {
        font-size: 1.6rem;
    }
    
    h3 {
        line-height: .8rem;
        font-weight: 500;
        font-size: 1.4rem;
        color: ${({theme}) => theme.colors.neutral8};
    }

    img {
        width: 5.2rem;
        padding-bottom: .4rem;
    }
`;