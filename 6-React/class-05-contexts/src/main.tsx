import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { PropDrilling } from "./pages/PropDrilling.tsx";
import { ContextPage } from "./pages/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <PropDrilling />
    <ContextPage />
  </React.StrictMode>
);
