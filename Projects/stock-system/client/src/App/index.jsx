import { Container } from "./style"
import { FormProducts } from "../components/formProducts"
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Container>
      <h1>App</h1>
      <main>
        <FormProducts/>
      </main>
    </Container>    
  )
}