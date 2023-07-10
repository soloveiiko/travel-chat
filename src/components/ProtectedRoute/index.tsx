import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isAuth, children }: any) => {
  if (!isAuth) {
    return <Navigate to="/signuptest" replace />
  }
  return children
}

export default ProtectedRoute
