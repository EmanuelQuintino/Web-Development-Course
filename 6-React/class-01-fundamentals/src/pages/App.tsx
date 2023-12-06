import React from "react";
import imageReact from "../assets/react.svg";

export function App() {
  return (
    <React.Fragment>
      <h1>Fundamentals</h1>
      <p>Syntax JSX (JS + XML/HTML)</p>
      <img src="vite.svg" alt="public" width={48} />
      <img src={imageReact} alt="assets" width={48} />
    </React.Fragment>
  );
}
