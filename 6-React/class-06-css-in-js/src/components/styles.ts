import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 120px;
  height: 56px;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.backgroundButton};
`;
