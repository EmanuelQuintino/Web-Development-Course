import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0); // inference
  const [status, setStatus] = useState("");

  function addCount() {
    setCount((prevCount) => prevCount + 1);
    setStatus("Increment");
  }

  function removeCount() {
    setCount((prevCount) => prevCount - 1);
    setStatus("Decrement");
  }

  return (
    <>
      <h1>Class States</h1>

      <section>
        <p>Count: {count}</p>
        <p>{status ? status : "Status"}</p>

        <button onClick={removeCount}>&lt; Rem</button>
        <button onClick={addCount}>Add &gt;</button>
      </section>
    </>
  );
}
