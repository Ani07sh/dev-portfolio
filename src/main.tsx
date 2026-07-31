import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx' // or app.tsx depending on your casing
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)