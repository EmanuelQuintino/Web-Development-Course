import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Button() {
  const { setName } = useContext(UserContext);
  function changeName() {
    setName((prevName) => (prevName === "Emanuel" ? "Quintino" : "Emanuel"));
  }
  return <button onClick={changeName}>Change name</button>;
}
