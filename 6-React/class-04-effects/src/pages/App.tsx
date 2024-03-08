import { useState, useEffect } from "react";
import { UserGitHubCard } from "../components/UserGitHubCard";

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("Redenrized"); // componentWillMount

  useEffect(() => {
    console.log("Effect"); // componentDidMount

    setCount2((value) => value + 1); // derived states

    return () => console.log("Closed"); // componentWillUnmount
  }, [count]); // componentDidUpdate

  console.log("Redenrized"); // componentWillMount

  return (
    <>
      <h1>Class 04 Effects</h1>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount((value) => value + 1)}>add</button>

      <UserGitHubCard name="EmanuelQuintino" />
    </>
  );
}
