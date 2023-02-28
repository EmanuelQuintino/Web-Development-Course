import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import ResetStyled from './styles/reset'
import { RouterProvider } from 'react-router-dom'
import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <RouterProvider router={Routes}/>
      <ResetStyled/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
