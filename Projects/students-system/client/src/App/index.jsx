import { Header } from "../components/Header"
import { Container, Menu, MainArticle , Footer } from "./style"
import { Outlet, NavLink } from "react-router-dom"

export function App() {
  return (
    <Container>
      <Header/>
      <main>
        <Menu>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/students" className={({isActive}) => isActive ? 'active' : ''}>
                  Alunos
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={({isActive}) => isActive ? 'active' : ''}>
                  Cadastro
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>
                  Sobre
                </NavLink>
              </li>
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