import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home }from './pages/Home'
import { CardPerfile } from './components/CardPerfil'
import "./styles/reset.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <CardPerfile login='EmanuelQuintino' name='Emanuel' age={30}/>
    <CardPerfile login='Emanuel' name='Emanuel' age={40}/>
    <CardPerfile login='Quintino' name='Quintino' age={40}/>
  </React.StrictMode>,
)
