import {createBrowserRouter} from "react-router-dom";
import { App } from "../App";
import { SignIn } from "../pages/SingIn";
import { SignUp } from "../pages/SingUp";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "/", element:  <SignIn/>},
            { path: "/register", element: <SignUp/>},
        ]
    }
]);