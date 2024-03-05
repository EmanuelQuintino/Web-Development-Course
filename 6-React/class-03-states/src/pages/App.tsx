import { useState } from "react";

export function App() {
  // let count = 0;
  const [count, setCount] = useState(0); // inference
  const [status, setStatus] = useState("");

  function incrementCount() {
    // count += 1;
    setCount((prevCount) => prevCount + 1);
    setStatus("Increment");
    console.log(count);
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
