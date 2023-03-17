import { Container } from './style';
import { FormUser } from '../../components/FormUser';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function SignUp() {
    return (
        <Container>
            <h2>Cadastre-se</h2>
            <FormUser />
            <Link to={"/"}>
                <Button variant="link">Login</Button>
            </Link>
        </Container>
    )
}