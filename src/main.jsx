import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { StatsProvider } from './statsContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StatsProvider>
      <App />
    </StatsProvider>
  </BrowserRouter>,
)
