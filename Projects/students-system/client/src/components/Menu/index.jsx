import { MenuContainer } from "./style"
import { NavLink } from "react-router-dom"

export function Menu() {
    return (
        <MenuContainer>
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
        </MenuContainer>
    )
}