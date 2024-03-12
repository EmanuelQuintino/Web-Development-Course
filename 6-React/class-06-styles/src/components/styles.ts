import styled from "styled-components";

const buttonDefault = true;

export const ButtonContainer = styled.button`
  height: 3.2rem;
  border-radius: 0.4rem;
  font-weight: bold;
  background: ${buttonDefault ? "green" : "red"};
  background: ${({ theme }) => theme.colors.backgroundButton};
  color: white;

  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }
`;
