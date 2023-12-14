import { ButtonContainer } from "./styles";

type Props = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Button({ darkTheme, setDarkTheme }: Props) {
  function changeTheme() {
    setDarkTheme(!darkTheme);
  }
  return <ButtonContainer onClick={changeTheme}>Tema</ButtonContainer>;
}
