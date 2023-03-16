import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Reset } from './style/reset'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Reset/>
  </React.StrictMode>,
)
