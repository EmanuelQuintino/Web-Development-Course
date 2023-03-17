import { Container } from "./style";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <Container>      
        <Outlet/>
    </Container>
  )
}