import { Container } from "./style";
import { FormUser } from "../components/FormUser";
import { FormLogin } from "../components/FormLogin";
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Container>
      <section>
        <h2>Cadastro de Usuário</h2>
        <FormUser />
      </section>
      <section>
        <h2>Login</h2>
        <FormLogin />
      </section>
    </Container>
  )
}