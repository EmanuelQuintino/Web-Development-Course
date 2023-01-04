import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { Navegation } from '../pages/Navegation'

export function AppRoutes() {
    return(
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/navegation' element={<Navegation />}/>
          </Routes>
    )
}