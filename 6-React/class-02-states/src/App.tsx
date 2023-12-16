import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function removeCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Class States</h1>

      <section>
        <p>Count: {count}</p>

        <button onClick={removeCount}>&lt; Rem</button>
        <button onClick={addCount}>Add &gt;</button>
      </section>
    </div>
  );
}
