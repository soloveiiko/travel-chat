import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<AppRoutes />} />
      </Routes>
    </div>
  )
}

export default App
