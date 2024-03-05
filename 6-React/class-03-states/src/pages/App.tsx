import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0); // inference
  const [status, setStatus] = useState("");

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setStatus("Increment");
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setStatus("Decrement");
  }

  return (
    <>
      <h1>Class 03 States</h1>

      <section>
        <p>Count: {count}</p>
        <p>{status ? status : "Status"}</p>

        <button onClick={decrementCount}>&lt; Dec</button>
        <button onClick={incrementCount}>Inc &gt;</button>
      </section>
    </>
  );
}
