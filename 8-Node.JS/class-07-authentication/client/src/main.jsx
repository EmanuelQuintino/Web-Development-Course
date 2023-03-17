import React from 'react'
import ReactDOM from 'react-dom/client'
import { Reset } from './style/reset'
import { RouterProvider } from 'react-router-dom'
import { Routes } from "./routes"
import { AuthProvider } from "./context/Auth";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}/>
      <Reset/>
    </AuthProvider>      
  </React.StrictMode>,
)
