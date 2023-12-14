import { GlobalStyles } from "../styles/reset";
import { AppContainer } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { appDarkTheme } from "../styles/themeDark";
import { appLightTheme } from "../styles/themeLight";
import { Button } from "../components/Button";

export function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeProvider theme={darkTheme == true ? appDarkTheme : appLightTheme}>
      <AppContainer>
        <h1>Class 06 Css in JS</h1>
        <Button darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </AppContainer>
      <GlobalStyles />
    </ThemeProvider>
  );
}
