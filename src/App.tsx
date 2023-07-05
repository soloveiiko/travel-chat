import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DesignElements from './pages/DesignElements'
import SignupPage from './pages/SignupPage'
import Navbar from './components/Navbar'
import LoginTest from "./pages/LoginTestPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logintest" element={<LoginTest />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/design" element={<DesignElements />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App