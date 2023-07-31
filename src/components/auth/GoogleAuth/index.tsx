import React from 'react'
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from '../../../firebase/firebase'
import { FetchSignUserPayload } from '../../../redux/auth/types'
import { signUpUserAction } from '../../../redux/auth/action'
import { useDispatch } from 'react-redux'

const GoogleAuth: React.FC = () => {
  const dispatch = useDispatch()
  const onGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider()
    const userDataFromGoogle = await signInWithPopup(auth, provider)
    console.log('sdf from signInWithPopup', userDataFromGoogle)
    const displayNameFromGoogle = userDataFromGoogle.user.displayName
    if (displayNameFromGoogle) {
      const payload: FetchSignUserPayload = {
        data: {
          username: displayNameFromGoogle,
          password: 'password1234',
        },
      }
      dispatch(signUpUserAction(payload))
    } else {
      console.error('Error: Username is null')
    }
  }
  return (
    <button className="btn btn-secondary" onClick={onGoogleSignUp}>
      SignUp with Google
    </button>
  )
}

export default GoogleAuth
