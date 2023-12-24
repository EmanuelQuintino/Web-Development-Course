import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Card() {
  const { count } = useContext(UserContext);
  return <p>Web Developer {count}</p>;
}
