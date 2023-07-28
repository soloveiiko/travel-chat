import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FetchSignUserPayload } from './redux/auth/types'
import { logoutAction, signInUserAction } from './redux/auth/action'
import { auth, onAuthStateChanged } from './firebase/firebase'
import AppRoutes from './routes'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const displayNameFromFirebase = userAuth.displayName
        const displayEmailFromFirebase = userAuth.email
        const payload: FetchSignUserPayload = {
          data: {
            username: displayNameFromFirebase,
            email: displayEmailFromFirebase,
            password: 'Password1.',
          },
        }
        dispatch(signInUserAction(payload))
        console.log(userAuth.displayName)
      } else {
        dispatch(logoutAction())
      }
    })
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
