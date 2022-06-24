import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes as Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
