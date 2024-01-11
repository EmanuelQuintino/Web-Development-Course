import { ContextTheme } from "../contexts/ThemeContext";
import { ButtonContainer } from "./styles";
import { useContext } from "react";

export function Button() {
  const { theme, changeTheme } = useContext(ContextTheme);

  const nameChangeTheme = theme === "light" ? "dark" : "light";

  return (
    <ButtonContainer onClick={changeTheme}>
      Change thema {nameChangeTheme}
    </ButtonContainer>
  );
}
