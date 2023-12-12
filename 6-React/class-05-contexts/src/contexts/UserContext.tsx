import { createContext } from "react";

type UserContext = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext({} as UserContext);
