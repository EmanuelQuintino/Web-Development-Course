import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { GlobalStyles } from "./styles/reset.ts";
import { ThemeProvider } from "styled-components";
import { appDarkTheme } from "./styles/themeDark.ts";
import { appLightTheme } from "./styles/themeLight.ts";
import { ContextTheme, ThemeContextProvider } from "./contexts/ThemeContext.tsx";

export function Main() {
  const { theme } = useContext(ContextTheme);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? appLightTheme : appDarkTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  </React.StrictMode>
);
