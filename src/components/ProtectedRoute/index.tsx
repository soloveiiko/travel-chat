import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsAuthSelector } from '../../redux/auth/selectors'

const ProtectedRoute = ({ children }: any) => {
  const isAuth = useSelector(getIsAuthSelector)
  if (!isAuth) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute
