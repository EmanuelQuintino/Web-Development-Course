import { ContextTheme } from "../main";
import { ButtonContainer } from "./styles";
import { useContext } from "react";

export function Button() {
  const { theme, setTheme } = useContext(ContextTheme);

  function changeTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  const nameChangeTheme = theme === "light" ? "dark" : "light";

  return (
    <ButtonContainer onClick={changeTheme}>
      Change thema {nameChangeTheme}
    </ButtonContainer>
  );
}
