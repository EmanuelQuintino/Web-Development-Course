import React from "react";
import imageReact from "./assets/react.svg";

// named exports
export function App() {
  return (
    <React.Fragment>
      <h1>Fundamentals</h1>
      <p>Component = TSX (TS + HTML)</p>
      <img src="vite.svg" alt="public" width={120} />
      <img src={imageReact} alt="assets" width={120} />
    </React.Fragment>
  );
}
