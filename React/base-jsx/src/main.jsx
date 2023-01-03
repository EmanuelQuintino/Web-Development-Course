import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Router } from './pages/Router'
import { Header } from './components/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Router />
    <Header />
  </React.StrictMode>,
)