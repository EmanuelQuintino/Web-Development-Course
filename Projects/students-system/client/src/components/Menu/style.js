import styled from 'styled-components' 

export const Container = styled.section`
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
        gap: 4.8rem;

        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
    }
    
    a {
        padding: .2rem;
        border-radius: .4rem;
        color: ${({theme}) => theme.colors.neutral8};
        border-bottom: 2px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
    }

    a:hover {
        border-bottom-color: ${({theme}) => theme.colors.neutral8};
    }

    .active {
        color: ${({theme}) => theme.colors.neutralF};
    }

    .iconMenuStudentsTable,
    .iconMenuAbout {
        font-size: 1.4rem;
    }
`;