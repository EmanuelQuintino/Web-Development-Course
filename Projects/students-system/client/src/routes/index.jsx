import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { Home } from "../pages/Home"
import { Students } from "../pages/Students"
import { Register } from "../pages/Register"
import { About } from "../pages/About"
import { PageError } from "../pages/PageError"

export const Routes = createBrowserRouter([
    {
        path: '/', 
        element: <App/>,
        errorElement: <PageError/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/students', element: <Students/>},
            {path: '/register', element: <Register/>},
            {path: '/about', element: <About/>},
        ]
    }
]);
