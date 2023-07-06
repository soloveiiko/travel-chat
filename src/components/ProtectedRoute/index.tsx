import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isAuth, children }: any) => {
  if (!isAuth) {
    return <Navigate to="/logintest" replace />
  }
  return children
}

export default ProtectedRoute
