import { MenuContainer } from "./style"
import { NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { BsTable } from "react-icons/bs"
import { IoMdPersonAdd } from "react-icons/io"
import { BsInfoCircleFill } from "react-icons/bs"

export function Menu() {
    return (
        <MenuContainer>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>
                  <AiFillHome/>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/students" className={({isActive}) => isActive ? 'active' : ''}>
                  <BsTable className="iconMenuStudentsTable"/>
                  Alunos
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={({isActive}) => isActive ? 'active' : ''}>
                  <IoMdPersonAdd/>
                  Cadastro
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>
                  <BsInfoCircleFill className="iconMenuAbout"/>
                  Sobre
                </NavLink>
              </li>
            </ul>
          </nav>
        </MenuContainer>
    )
}