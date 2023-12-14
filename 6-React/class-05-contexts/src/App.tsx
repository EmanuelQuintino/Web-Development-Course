import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { UserProvider } from "./contexts/UserContext";

export function App() {
  return (
    <UserProvider>
      <h1>Class 05 Contexts</h1>
      <Card />
      <Button />
    </UserProvider>
  );
}
