import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/app.context'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </QueryClientProvider>

  // </React.StrictMode>,
)
