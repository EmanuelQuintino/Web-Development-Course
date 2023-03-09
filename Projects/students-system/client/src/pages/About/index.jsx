import { Container } from "./style"

export function About() {
  return (
    <Container>
      <h1>Sobre</h1>
      <p>
        Projeto criado para conclusão do Curso de Desenvolvimento Web Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor voluptates quisquam temporibus incidunt ullam itaque! Quibusdam laudantium at rerum! Repellendus laboriosam alias accusamus quia voluptate blanditiis explicabo labore doloribus.
      </p>

      <section>
      <h2>Tecnologias</h2>
        <p>
          <h4>React</h4>
          <ul>
            <li>Style Components</li>
            <li>React Router Dom</li>
            <li>React Icons</li>
            <li>UseForm e Yup</li>
            <li>Axios</li>
            <li>Bootstrap</li>
          </ul>
        </p>

        <p>
          <h4>Node</h4>
          <ul>
            <li>Express</li>
            <li>Prisma</li>
          </ul>
        </p>
      </section>
    </Container>
  )
}