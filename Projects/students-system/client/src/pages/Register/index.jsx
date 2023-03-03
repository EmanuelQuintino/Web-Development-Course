import { Container } from "./style"
import { FormRegister } from "../../components/FormRegister"

export function RegisterStudent() {
  return (
    <Container>
      <h1>Cadastro de Aluno</h1>
      <FormRegister/>
    </Container>
  )
}