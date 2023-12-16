import { PropsWithChildren, createContext, useState } from "react";

type Theme = "light" | "dark";

type Props = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  changeTheme: () => void;
};

export const ContextTheme = createContext<Props>({} as Props);

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("dark");

  function changeTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ContextTheme.Provider
      value={{
        theme,
        setTheme,
        changeTheme,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
}
