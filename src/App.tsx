import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
//* redux
import { getIsAuthSelector } from './redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { signUpSuccessAction } from './redux/auth/action'
import { FetchSignSuccessPayload } from './redux/auth/types'

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(getIsAuthSelector)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const displayNameFromGoogle = currentUser?.displayName
      // const payload: FetchSignSuccessPayload = {
      //   data: [],
      //   username: displayNameFromGoogle,
      // }
      // dispatch(signUpSuccessAction(payload))
      console.log('User from useEffect App,tsx:', currentUser?.displayName)
    })
    return () => {
      unsubscribe()
    }
  })
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
