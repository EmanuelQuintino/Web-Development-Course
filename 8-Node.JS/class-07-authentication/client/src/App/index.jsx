import { Container } from "./style";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignIn } from "../pages/SingIn";
import { SignUp } from "../pages/SingUp";

export function App() {
  return (
    <Container>      
        {/* <SignIn/> */}
        <SignUp/>
    </Container>
  )
}