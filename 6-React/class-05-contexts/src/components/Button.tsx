import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Button() {
  const { incrementCount, showCount, switchShowCount } = useContext(UserContext);
  return (
    <>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={switchShowCount}>{showCount ? "Hide" : "Show"}</button>
    </>
  );
}
