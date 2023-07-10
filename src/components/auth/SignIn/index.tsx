import React, { useState } from 'react'
import FormInput, { passwordField, usernameField } from '../../formInputs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FetchSignUpUserPayload } from '../../../redux/auth/types'
import { signUpUserAction } from '../../../redux/auth/action'
import FormContainer from '../../styled/FormContainer'

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState({
    [usernameField.name]: '',
    [passwordField.name]: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputs = [usernameField, passwordField]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const payload: FetchSignUpUserPayload = {
      data: {
        username: credentials[usernameField.name],
        password: credentials[passwordField.name],
      },
    }
    dispatch(signUpUserAction(payload))
    setCredentials({
      [usernameField.name]: '',
      [passwordField.name]: '',
    })
    navigate('/profile')
  }
  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h1 className="text-center">Sign In</h1>
        {inputs.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            value={credentials[input.name]}
            onChange={handleChange}
          />
        ))}
        <button className="btn btn-primary">Submit</button>
        {/*<h1 className="text-center">*/}
        {/*  Have an account? <NavLink to="/login">Login</NavLink>*/}
        {/*</h1>*/}
      </FormContainer>
    </form>
  )
}

export default SignIn
