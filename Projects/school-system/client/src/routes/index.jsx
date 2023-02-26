import { createBrowserRouter } from 'react-router-dom'
import { App } from '../pages/App'
import { Studants } from '../pages/Studants'
import { Contact } from '../pages/Contact'
import { About } from '../pages/About'
import { Error404 } from '../pages/Error404'

export const routes = createBrowserRouter([{
    path: '/', 
    element: <App/>,
    errorElement: <Error404/>, 
    children: [
    {path: '/studants', element: <Studants/>},
    {path: '/contact', element: <Contact/>},
    {path: '/about', element: <About/>}
    ]
}]);      