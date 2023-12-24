import { PropsWithChildren, createContext, useState } from "react";

type Context = {
  count: number;
  incrementCount: () => void;
  showCount: boolean;
  switchShowCount: () => void;
};

export const UserContext = createContext({} as Context);

export function UserProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState(1);
  const [showCount, setShowCount] = useState(true);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function switchShowCount() {
    setShowCount((prevShowCount) => !prevShowCount);
  }

  return (
    <UserContext.Provider
      value={{
        count,
        incrementCount,
        showCount,
        switchShowCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
