import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

if (import.meta.env.DEV) {
  const { setupMocks } = await import('@/shared/lib/axios-mock-adapter')
  setupMocks()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
