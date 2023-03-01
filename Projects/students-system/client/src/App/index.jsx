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
          <Outlet/>
        </MainArticle>
        
        <Footer>

        </Footer>
      </main>
    </Container>
  )
}