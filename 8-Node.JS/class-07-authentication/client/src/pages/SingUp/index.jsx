import { Container } from './style';
import { FormUser } from '../../components/FormUser';
import Button from 'react-bootstrap/Button';

export function SignUp() {
    return (
        <Container>
            <h2>Cadastre-se</h2>
            <FormUser />
            <Button variant="link">Login</Button>
        </Container>
    )
}