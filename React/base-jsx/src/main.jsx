import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Router } from './pages/Router'
import { Footer } from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Router />
    <Footer />
  </React.StrictMode>,
)