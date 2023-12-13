import React from "react";
import { ButtonContainer } from "./styles";
import { AppThemeProps } from "../pages/App";

type Props = {
  appTheme: AppThemeProps;
  setAppTheme: React.Dispatch<React.SetStateAction<AppThemeProps>>;
};

export function Button({ appTheme, setAppTheme }: Props) {
  function changeTheme() {
    setAppTheme(appTheme === "light" ? "dark" : "light");
  }
  return (
    <>
      <ButtonContainer onClick={changeTheme}>theme</ButtonContainer>;
    </>
  );
}
