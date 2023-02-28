import { Header } from "../components/Header"
import { Container, Menu, MainArticle , Footer } from "./style"

export function App() {
  return (
    <Container>
      <Header/>
      <main>
        <Menu>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/students">Alunos</a></li>
              <li><a href="/register">Cadastro</a></li>
              <li><a href="/about">Sobre</a></li>
            </ul>
          </nav>
        </Menu>
        <MainArticle>
          <h1>App</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sed quod explicabo, reiciendis cum at, est sunt quibusdam omnis nam non veniam alias quia, ipsum enim voluptates libero ducimus cumque.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, cupiditate numquam officia, molestiae nesciunt neque ullam similique incidunt aliquam quos aut voluptatum quod fuga optio architecto accusantium nemo quam ipsa.
          </p>
        </MainArticle>
        <Footer>

        </Footer>
      </main>
    </Container>
  )
}