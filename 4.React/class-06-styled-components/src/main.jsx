import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js' 
import Reset from './styles/reset.js'
import './styles/reset'

import { App } from './pages/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
