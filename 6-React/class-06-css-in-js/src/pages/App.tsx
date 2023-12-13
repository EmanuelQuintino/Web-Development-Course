import { useState } from "react";
import { Button } from "../components/button";
import { AppContainer } from "./styles";

export type AppThemeProps = "light" | "dark";

export function App() {
  const [appTheme, setAppTheme] = useState<AppThemeProps>("light");

  return (
    <AppContainer appTheme={appTheme}>
      <h1>Class 06 Css in JS</h1>
      <Button appTheme={appTheme} setAppTheme={setAppTheme} />
    </AppContainer>
  );
}
