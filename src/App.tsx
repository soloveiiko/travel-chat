import React from "react"
import "./App.css"
import { NavLink, Route, Routes } from "react-router-dom"
import Basic from "./pages/basic/basic"
import Login from "./pages/auth/login"
import DesignElements from "./pages/DesignElements"

function App() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-red-600 underline">Hello world</h2>
      <h3>hello once again</h3>
      <NavLink to="/login">Login</NavLink>
      <Routes>
        <Route path="/basic" element={<Basic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/design" element={<DesignElements />} />
      </Routes>
    </div>
  )
}

export default App
