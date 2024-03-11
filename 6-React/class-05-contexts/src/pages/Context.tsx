import { createContext, useContext } from "react";

type ContextProps = {
  userName: string;
};

const MyContext = createContext({} as ContextProps);

export function Context() {
  const userName = "Context";
  return (
    <MyContext.Provider value={{ userName }}>
      <Card />
    </MyContext.Provider>
  );
}

export function Card() {
  const { userName } = useContext(MyContext);
  return (
    <>
      <h1>Card {userName}</h1>
      <Description />
    </>
  );
}

export function Description() {
  const { userName } = useContext(MyContext);
  return (
    <>
      <p>Class example {userName}</p>
    </>
  );
}
