import { Header } from "../components/Header"
import { Container, Menu, MainArticle , Footer } from "./style"
import { Outlet, Link } from "react-router-dom"

export function App() {
  return (
    <Container>
      <Header/>
      <main>
        <Menu>
          <nav>
            <ul>
              {/* <li><Link to="/">Home</Link></li>
              <li><Link to="/students">Alunos</Link></li>
              <li><Link to="/register">Cadastro</Link></li>
              <li><Link to="/about">Sobre</Link></li> */}

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
          <Outlet/>
        </MainArticle>
        <Footer>

        </Footer>
      </main>
    </Container>
  )
}