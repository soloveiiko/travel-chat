import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children, isAuth, redirectPath = '/login' }: any) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoute
