import styled from 'styled-components' 

export const MenuContainer = styled.div`
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
        color: ${({theme}) => theme.colors.neutralB};
    }

    & a:hover {
        border-bottom: 4px solid ${({theme}) => theme.colors.neutralB};
    }

    & .active {
        color: ${({theme}) => theme.colors.neutral1};
    }
`;