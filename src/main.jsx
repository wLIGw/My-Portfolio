import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import './styles/index.scss'
import { ThemeContext, ThemeProvider } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter basename="/My-Portfolio">
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
