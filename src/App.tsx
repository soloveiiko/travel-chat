import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
//* redux
import { useDispatch } from 'react-redux'
import { logoutAction, signInUserAction } from './redux/auth/action'
import { FetchSignUserPayload } from './redux/auth/types'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const displayNameFromGoogle = userAuth.displayName
        if (displayNameFromGoogle) {
          const payload: FetchSignUserPayload = {
            data: {
              username: displayNameFromGoogle,
              password: 'password1234',
            },
          }
          dispatch(signInUserAction(payload))
        } else {
          console.error('Error: Username is null')
        }
        console.log(userAuth.displayName)
      } else {
        dispatch(logoutAction())
      }
    })
    console.log('page loaded')
  }, [])

  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
