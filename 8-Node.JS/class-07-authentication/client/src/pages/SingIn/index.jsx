import { Container } from './style';
import { FormLogin } from '../../components/FormLogin';
import Button from 'react-bootstrap/Button';

export function SignIn() {
    return (
        <Container>
            <h2>Login</h2>
            <FormLogin />
            <Button variant="link">Registre-se</Button>
        </Container>
    )
}