import React from 'react'

const ErrorPageContainer = ({ children }: { children: any }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default ErrorPageContainer
