import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from './layouts/Layout'
import { AuthProvider } from './contexts/AuthProvider'
import DashboardPage from './pages/DashboardPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import GlobalStyles from './styles/Global'
import { theme } from './styles/Theme'
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientID}>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
                <Route index element={<DashboardPage />} />
                <Route path='/login' element={<LoginPage />} />
              </Route>
            </Routes>
          </AuthProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ThemeProvider>    
  </React.StrictMode>,
)
