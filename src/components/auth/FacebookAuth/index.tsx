import React from 'react'
import {
  auth,
  FacebookAuthProvider,
  signInWithPopup,
} from '../../../firebase/firebase'
import { FetchSignUserPayload } from '../../../redux/auth/types'
import { signUpUserAction } from '../../../redux/auth/action'
import { useDispatch } from 'react-redux'

const FacebookAuth: React.FC = () => {
  const dispatch = useDispatch()
  const onFacebookSignUp = async () => {
    const provider = new FacebookAuthProvider()
    const userDataFromFacebook = await signInWithPopup(auth, provider)
    console.log('sdf from signInWithPopup', userDataFromFacebook)
    const displayNameFromFacebook = userDataFromFacebook.user.displayName
    if (displayNameFromFacebook) {
      const payload: FetchSignUserPayload = {
        data: {
          username: displayNameFromFacebook,
          password: 'password1234',
        },
      }
      dispatch(signUpUserAction(payload))
    } else {
      console.error('Error')
    }
  }
  return (
    <button className="btn btn-secondary" onClick={onFacebookSignUp}>
      SignUp with Facebook
    </button>
  )
}

export default FacebookAuth
