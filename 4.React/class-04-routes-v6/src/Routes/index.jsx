import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { Gallery } from '../pages/Gallery'
import { Contact } from '../pages/Contact'

// <Route path='/' element={<Home/>}/>
// <Link to="/">
// <BrowserRouter>

export function AppRoutes() {
    return(
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
    )
}