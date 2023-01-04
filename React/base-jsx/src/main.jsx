import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppRoutes } from './Routes/'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <AppRoutes />   
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)