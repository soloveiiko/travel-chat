import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import FormInput, {
  passwordConfirmField,
  passwordField,
  usernameField,
} from '../../formInputs'
import FormContainer from '../../styled/FormContainer'
import { signUpUserAction } from '../../../redux/auth/action'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSignUserPayload } from '../../../redux/auth/types'
import { getIsAuthSelector } from '../../../redux/auth/selectors'
//* FIREBASE
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../firebase/firebase'

const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState({
    [usernameField.name]: '',
    [passwordField.name]: '',
    [passwordConfirmField.name]: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(getIsAuthSelector)

  useEffect(() => {
    if (isAuth) {
      navigate('/profile')
    }
  }, [isAuth])

  const inputs = [
    usernameField,
    passwordField,
    { ...passwordConfirmField, pattern: credentials.password },
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const payload: FetchSignUserPayload = {
      data: {
        username: credentials[usernameField.name],
        password: credentials[passwordField.name],
      },
    }
    dispatch(signUpUserAction(payload))
    setCredentials({
      [usernameField.name]: '',
      [passwordField.name]: '',
      [passwordConfirmField.name]: '',
    })
  }

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

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
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h1 className="text-center">Sign Up</h1>
        <button className="btn btn-secondary" onClick={onGoogleSignUp}>
          SignUp with Google
        </button>
        {inputs.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            value={credentials[input.name]}
            onChange={handleChange}
          />
        ))}
        <button className="btn btn-primary">Submit</button>
        <h1 className="text-center">
          Have an account? <NavLink to="/login">Login</NavLink>
        </h1>
      </FormContainer>
    </form>
  )
}

export default SignUp
