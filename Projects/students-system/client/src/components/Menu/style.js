import styled from 'styled-components' 

export const MenuContainer = styled.div`
    background: #000C;
    
    padding: 2.4rem;
    width: 100%;
    height: calc(100vh - 10.0rem);

    position: absolute;
    z-index: 1;    

    display: grid;
    place-content: center;

    ul {
        list-style: none;

        display: grid;
        gap: 5.6rem;

        font-size: 2.0rem;
        font-weight: 600;
        text-align: center;
    }
    
    a {
        padding: .8rem;
        border-radius: .4rem;
        color: ${({theme}) => theme.colors.neutralB};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
    }

    a:hover {
        border-bottom: 4px solid ${({theme}) => theme.colors.neutralB};
    }

    & .active {
        color: ${({theme}) => theme.colors.neutral1};
    }
`;