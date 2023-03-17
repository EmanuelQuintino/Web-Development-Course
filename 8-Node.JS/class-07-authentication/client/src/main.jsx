import React from 'react'
import ReactDOM from 'react-dom/client'
import { Reset } from './style/reset'
import { RouterProvider } from 'react-router-dom'
import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}/>
    <Reset/>
  </React.StrictMode>,
)
