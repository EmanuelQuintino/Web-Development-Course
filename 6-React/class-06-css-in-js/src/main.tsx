import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { GlobalStyles } from "./styles/reset.ts";
import { ThemeProvider } from "styled-components";
import { appDarkTheme } from "./styles/themeDark.ts";
import { appLightTheme } from "./styles/themeLight.ts";

type Theme = "light" | "dark";

type Props = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ContextTheme = createContext<Props>({} as Props);

export function Main() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ContextTheme.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme == "light" ? appLightTheme : appDarkTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
