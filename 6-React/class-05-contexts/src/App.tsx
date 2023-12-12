import { useState } from "react";

import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { UserContext } from "./contexts/UserContext";

export function App() {
  const [name, setName] = useState("Emanuel");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <h1>Class 05 Contexts</h1>
      <Card />
      <Button />
    </UserContext.Provider>
  );
}
