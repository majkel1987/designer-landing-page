import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/ibm-plex-sans/latin-ext-400.css'
import '@fontsource/ibm-plex-sans/latin-ext-500.css'
import '@fontsource/ibm-plex-sans/latin-ext-600.css'
import '@fontsource/manrope/latin-ext-700.css'
import '@fontsource/manrope/latin-ext-800.css'
import { App } from './app/App'
import './styles/reset.css'
import './styles/tokens.css'
import './styles/globals.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
