import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 12.0rem;
    margin: .8rem auto;
    padding: .4rem .8rem;
    border-radius: .8rem;

    /* background: ${({ theme }) => theme.color.complementary}; */
    background: none;
    outline: none;
    border: none;

    color: ${({ theme }) => theme.color.complementary};
    font-weight: 600;
    font-size: 2.0rem;

    &:hover {
        filter: brightness(1.1);
    }
`