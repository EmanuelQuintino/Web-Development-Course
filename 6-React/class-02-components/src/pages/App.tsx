import { ButtonApp } from "../components/ButtonApp";
import { UserCard } from "../components/UserCard";

export function App() {
  return (
    <>
      <h1>Class 02 Components</h1>

      <ButtonApp name="Play" />
      <ButtonApp name="Stop" />
      <ButtonApp name="<<" />
      <ButtonApp name=">>" />

      <UserCard name="Jeanderson" age={20} color="lightblue" />
      <UserCard name="Gilsara" age={19} color="lightpink" />
    </>
  );
}
