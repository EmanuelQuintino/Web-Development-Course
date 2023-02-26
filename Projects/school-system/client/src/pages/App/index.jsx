import { Link, Outlet } from 'react-router-dom'
export function App() {
  return (
    <div className="container">
      <h1>School System</h1>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Studants'}>Alunos</Link></li>
          <li><Link to={'/contact'}>Contato</Link></li>
          <li><Link to={'/about'}>Sobre</Link></li>
        </ul>
      </nav>

      <Outlet/>
      
      <p>Footer</p>
    </div>
  )
}