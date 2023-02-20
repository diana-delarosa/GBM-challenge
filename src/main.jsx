import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import Dashboard from './pages/DashboardPage'
import ErrorPage from './pages/ErrorPage'
import GlobalStyles from './styles/Global'
import { theme } from './styles/Theme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>    
  </React.StrictMode>,
)
