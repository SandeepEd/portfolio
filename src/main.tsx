import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppProviders from './providers/AppProviders'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProviders>
    <App />
  </AppProviders>
)
