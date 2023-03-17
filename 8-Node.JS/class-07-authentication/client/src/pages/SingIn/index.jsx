import { Container } from './style';
import { FormLogin } from '../../components/FormLogin';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../context/Auth";

export function SignIn() {
    const { authenticated } = useContext(AuthContext);
    console.log(authenticated);
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