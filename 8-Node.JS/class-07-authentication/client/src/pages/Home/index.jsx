import { Container } from './style';
import Button from 'react-bootstrap/Button';

export function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <p>Seja Bem-vindo!</p>
            <Button variant="link">Sair</Button>
        </Container>
    )
}