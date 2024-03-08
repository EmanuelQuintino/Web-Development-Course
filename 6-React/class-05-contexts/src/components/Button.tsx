import { useContext } from "react";
import { IncrementContext } from "../contexts/IncrementContext";

export function Button() {
  const { incrementCount, showCount, switchShowCount } = useContext(IncrementContext);
  return (
    <>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={switchShowCount}>{showCount ? "Hide" : "Show"}</button>
    </>
  );
}
