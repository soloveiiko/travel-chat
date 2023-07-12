import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import FormInput, {
  passwordConfirmField,
  passwordField,
  usernameField,
} from '../../formInputs'
import FormContainer from '../../styled/FormContainer'
import { signUpUserAction } from '../../../redux/auth/action'
import { useDispatch } from 'react-redux'
import { FetchSignUserPayload } from '../../../redux/auth/types'

const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState({
    [usernameField.name]: '',
    [passwordField.name]: '',
    [passwordConfirmField.name]: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h1 className="text-center">Sign Up</h1>
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
