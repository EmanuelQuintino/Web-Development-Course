import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 3.2rem;
  border-radius: 0.4rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.backgroundButton};

  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }
`;
