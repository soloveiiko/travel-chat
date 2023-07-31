import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import FormInput, {
  emailField,
  passwordConfirmField,
  passwordField,
  usernameField,
} from '../../formInputs'
import FormContainer from '../../styled/FormContainer'
import { signUpUserAction } from '../../../redux/auth/action'
import { useDispatch } from 'react-redux'
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '../../../firebase/firebase'
import GoogleAuth from '../GoogleAuth'
import FacebookAuth from '../FacebookAuth'

const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState({
    [usernameField.name]: '',
    [emailField.name]: '',
    [passwordField.name]: '',
    [passwordConfirmField.name]: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputs = [
    usernameField,
    emailField,
    passwordField,
    { ...passwordConfirmField, pattern: credentials.password },
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    createUserWithEmailAndPassword(
      auth,
      credentials[emailField.name],
      credentials[passwordField.name]
    ).then((userAuth) => {
      return updateProfile(userAuth.user, {
        displayName: credentials[usernameField.name],
      })
        .then(() => {
          dispatch(
            signUpUserAction({
              data: {
                username: userAuth.user.displayName,
                email: userAuth.user.email,
                password: credentials[passwordField.name],
              },
            })
          )
          navigate('/profile')
          setCredentials({
            [usernameField.name]: '',
            [emailField.name]: '',
            [passwordField.name]: '',
            [passwordConfirmField.name]: '',
          })
        })
        .catch(() => {
          console.log('user not updated')
        })
    })
  }

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h1 className="text-center">Sign Up</h1>
        <GoogleAuth />
        <FacebookAuth />
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
