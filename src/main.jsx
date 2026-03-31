import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router DOM:
import { BrowserRouter } from 'react-router-dom'

// Auth Context
import { AuthContextProvider } from '@contexts/AuthContext'

// TanStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
