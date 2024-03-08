import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { IncrementProvider } from "../contexts/IncrementContext";

export function App() {
  return (
    <IncrementProvider>
      <h1>Class 05 Contexts</h1>
      <Card />
      <Button />
    </IncrementProvider>
  );
}
