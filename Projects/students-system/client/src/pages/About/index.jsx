import { Container } from "./style"

export function About() {
  return (
    <Container>
      <h1>Sobre</h1>
      <p>
        Projeto criado para conclusão do Curso de Desenvolvimento Web Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor voluptates quisquam temporibus incidunt ullam itaque! Quibusdam laudantium at rerum! Repellendus laboriosam alias accusamus quia voluptate blanditiis explicabo labore doloribus.
      </p>

      <section>
        <p>
          <h3>Front-End</h3>
          <ul>
            <li>React</li>
            <li>Style Components</li>
            <li>React Router Dom</li>
            <li>React Icons</li>
            <li>UseForm e Yup</li>
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