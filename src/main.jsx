import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Restaura el mode SIMPLIFICA abans del primer render
try {
  if (localStorage.getItem('portal-bio-simplified') === '1') {
    document.body.classList.add('simplified')
  }
} catch {
  // localStorage no disponible: ignorem
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
