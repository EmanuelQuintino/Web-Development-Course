import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { PropDrilling } from "./pages/PropDrilling.tsx";
import { Context } from "./pages/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <PropDrilling />
    <Context />
  </React.StrictMode>
);
