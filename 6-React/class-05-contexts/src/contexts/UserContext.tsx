import { PropsWithChildren, createContext, useState } from "react";

type Context = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<Context>({} as Context);

export function UserProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState("Emanuel");

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
