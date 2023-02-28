import styled from 'styled-components'

export const HeaderContainer = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 12.0rem;
    padding: 3.2rem;
    border-bottom: .2rem solid ${({theme}) => theme.color.neutral8};

    background: ${({theme}) => theme.color.background};
    color: white;

    & img {
        width: 9.2rem;
    }

    & h3 {
        font-weight: 500;
        font-size: 2.4rem;
        color: ${({theme}) => theme.color.neutral8};
    }
`;