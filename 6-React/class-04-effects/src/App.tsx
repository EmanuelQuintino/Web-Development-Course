import { useEffect, useState } from "react";

export function App() {
  const [count, setCount] = useState(0); // inference

  console.log("rendered"); // componentWillMount

  useEffect(() => {
    console.log("effect"); // componentDidMount

    setCount((value) => value + 1); // derived states

    const timeoutID = setTimeout(() => {
      console.log("timeout");
    }, 3000);

    // return () => console.log("closed");
    return () => clearInterval(timeoutID); // componentWillUnmount
  }, [count]); // componentDidUpdate

  console.log("rendered"); // componentWillMount

  return (
    <>
      <h1>Class 04 Effects</h1>

      <section>
        <p>Count: {count}</p>

        <button onClick={() => setCount((value) => value + 1)}>Add+</button>
      </section>
    </>
  );
}
