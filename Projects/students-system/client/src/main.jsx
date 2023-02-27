import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import ResetStyled from './styles/reset'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <ResetStyled/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
