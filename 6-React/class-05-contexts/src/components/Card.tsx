import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Card() {
  const { count, showCount } = useContext(UserContext);
  return <p>Web Developer {showCount && count}</p>;
}
