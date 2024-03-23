import { Container } from './style';
import { FormLogin } from '../../components/FormLogin';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export function SignIn() {
    return (
        <Container>
            <h2>Login</h2>
            <FormLogin />
            <Link to={"/register"}>
                <Button variant="link">Registre-se</Button>
            </Link>
        </Container>
    )
}