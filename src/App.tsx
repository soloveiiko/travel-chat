import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DesignElements from './pages/DesignElements'
import SignupPage from './pages/SignupPage'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/errorPages/NotFoundPage'
import NoAccessPage from './pages/errorPages/NoAccessPage'
import ServerErrorPage from './pages/errorPages/ServerErrorPage'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/design" element={<DesignElements />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/403" element={<NoAccessPage />} />
        <Route path="/500" element={<ServerErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
