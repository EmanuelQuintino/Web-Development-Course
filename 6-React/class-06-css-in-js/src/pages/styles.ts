import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.backgroundPage};
`;
