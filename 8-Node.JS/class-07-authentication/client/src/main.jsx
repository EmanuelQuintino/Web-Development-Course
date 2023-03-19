import React from 'react'
import ReactDOM from 'react-dom/client'
import { Reset } from './style/reset'
import { Routes } from "./routes"
import { AuthProvider } from "./context/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Reset/>
      <Routes/>
    </AuthProvider>      
  </React.StrictMode>,
)
