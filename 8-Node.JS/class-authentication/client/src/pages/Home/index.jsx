import { Container } from './style';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

export function Home() {
    const { handleLogout } = useContext(AuthContext);
    return (
        <Container>
            <h1>Home</h1>
            <p>Seja Bem-vindo!</p>
            <Button variant="link" onClick={handleLogout}>Sair</Button>
        </Container>
    )
}