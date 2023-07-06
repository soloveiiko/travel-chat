import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsAuthSelector } from './redux/auth/selectors'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DesignElements from './pages/DesignElements'
import SignupPage from './pages/SignupPage'
import Navbar from './components/Navbar'
import LoginTest from './pages/LoginTestPage'
import Header from './components/HeaderTest'
import ProtectedRoute from './components/ProtectedRoute'
import ProfilePage from './pages/ProfilePage'

function App() {
  const isAuth = useSelector(getIsAuthSelector)
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/signuptest" element={<LoginTest />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/design" element={<DesignElements />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App
