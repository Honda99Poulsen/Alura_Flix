import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes.jsx'
import './reset.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from './contexto/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalContextProvider>
        <AppRoutes />
      </GlobalContextProvider>
  </React.StrictMode>,
)
