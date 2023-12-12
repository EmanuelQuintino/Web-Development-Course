import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Card() {
  const { name } = useContext(UserContext);
  return (
    <>
      <h2>{name}</h2>
      <p>Web Developer</p>
    </>
  );
}
