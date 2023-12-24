import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Button() {
  const { incrementCount } = useContext(UserContext);
  return <button onClick={incrementCount}>Increment</button>;
}
