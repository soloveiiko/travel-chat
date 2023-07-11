import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DesignElements from './pages/DesignElements'
import SignupPage from './pages/SignupPage'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import ProfilePage from './pages/ProfilePage'

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
      </Routes>
    </div>
  )
}

export default App
