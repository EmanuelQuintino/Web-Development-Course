import { useContext } from "react";
import { IncrementContext } from "../contexts/IncrementContext";

export function Card() {
  const { count, showCount } = useContext(IncrementContext);
  return <p>Web Developer {showCount && count}</p>;
}
