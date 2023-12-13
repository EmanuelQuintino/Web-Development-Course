import styled from "styled-components";
import { AppThemeProps } from "./App";

type Props = {
  appTheme: AppThemeProps;
};

export const AppContainer = styled.div<Props>`
  display: grid;
  place-content: center;
  height: 100vh;
  color: ${({ appTheme }) => (appTheme == "light" ? "black" : "white")};
  background: ${({ appTheme }) => (appTheme == "light" ? "white" : "black")};
`;
