import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Navegation } from './pages/Navegation'
import { Footer } from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Navegation />
    <Footer />
  </React.StrictMode>,
)