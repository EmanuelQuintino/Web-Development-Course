import styled from 'styled-components'

export const HeaderContainer = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 2.4rem;
    border-bottom: .2rem solid lightgrey;

    background: ${({theme}) => theme.color.main}

    /* & span {
        color: ${({theme}) => theme.color.complementary}
    } */
`;