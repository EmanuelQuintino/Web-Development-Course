import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

export function Menu() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Link as ={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to={'/studants'}>Alunos</Nav.Link>
        <Nav.Link as={Link} to={'/register'}>Cadastrar</Nav.Link>
    </Nav>
  );
}