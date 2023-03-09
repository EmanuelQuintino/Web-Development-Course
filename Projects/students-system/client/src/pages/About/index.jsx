import { Container } from "./style"

export function About() {
  return (
    <Container>
      <h1>Sobre</h1>
      <p>
        Projeto Full Stack criado para conclusão do Curso de Desenvolvimento Web. Aborda estilos em JavaScript e pré processadores, rotas e menu de navegação e página de error 404, também conta com formulários e validação de campos para cadastro. Na página de Alunos, foi colocado um input de busca avançada por ID, Nome, Email, Cidade e CPF que mostra - em uma tabela - os dados dos alunos com opção de editar ou deletar se preferir. Algumas das tecnologias usados foram:
      </p>

      <section>
        <p>
          <h3>Front-End</h3>
          <ul>
            <li>React</li>
            <li>Style Components</li>
            <li>React Router Dom</li>
            <li>React Icons</li>
            <li>UseForm</li>
            <li>Axios</li>
            <li>Bootstrap</li>
          </ul>
        </p>

        <p>
          <h4>Back-End</h4>
          <ul>
            <li>MySQL</li>
            <li>Node</li>
            <li>Express</li>
            <li>Prisma</li>
          </ul>
        </p>
      </section>
    </Container>
  )
}