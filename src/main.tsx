import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

/* TS: Se utiliza el carácter ! para indicar por 'inferencia' que el elemento no es null */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
