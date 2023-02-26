import { Outlet } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <div className="container">
      <header>
        <h1>Sistema de Alunos</h1>
        <Menu/>
      </header>
      <Outlet/>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}