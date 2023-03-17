import {createBrowserRouter} from "react-router-dom";
import { App } from "../App";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "/", element:  <SignIn/>},
            { path: "/register", element: <SignUp/>},
            { path: "/home", element: <Home/>},
        ]
    }
]);