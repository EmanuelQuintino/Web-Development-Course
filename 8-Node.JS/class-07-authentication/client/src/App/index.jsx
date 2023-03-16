import { Container } from "./style";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignIn } from "../pages/SingIn";
import { SignUp } from "../pages/SingUp";
import { Home } from "../pages/Home";

export function App() {
  return (
    <Container>      
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <Home/>
    </Container>
  )
}