import { PropsWithChildren, createContext, useState } from "react";

type Context = {
  count: number;
  incrementCount: () => void;
};

export const UserContext = createContext({} as Context);

export function UserProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <UserContext.Provider
      value={{
        count,
        incrementCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
