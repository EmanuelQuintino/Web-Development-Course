import { createContext, useContext } from "react";

type ContextProps = {
  name: string;
};

const MyContext = createContext({} as ContextProps);

export function ContextPage() {
  return (
    <MyContext.Provider value={{ name: "Emanuel" }}>
      <h1>My Context Page</h1>
      <Card />
    </MyContext.Provider>
  );
}

export function Card() {
  return (
    <>
      <h2>Card</h2>
      <Button />
    </>
  );
}

export function Button() {
  const { name } = useContext(MyContext);
  return (
    <>
      <button>{name}</button>
    </>
  );
}
