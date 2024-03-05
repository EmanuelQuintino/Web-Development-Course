import { useState, useEffect } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [countClick, setCountClick] = useState(0);

  console.log("Redenrized"); // componentWillMount

  useEffect(() => {
    console.log("Effect"); // componentDidMount

    setCountClick((value) => value + 1); // Derived States

    return () => console.log("Closed"); // componentWillUnmount
  }, [count]); // componentDidUpdate

  return (
    <>
      <h1>Class 04 Effects</h1>
      <p>Count: {count}</p>
      <p>CountClick: {countClick}</p>
      <button onClick={() => setCount((value) => value + 1)}>add</button>
    </>
  );
}
