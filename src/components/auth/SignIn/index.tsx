import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSignUserPayload } from '../../../redux/auth/types'
import { signInUserAction } from '../../../redux/auth/action'
import FormInput, { passwordField, usernameField } from '../../formInputs'
import FormContainer from '../../styled/FormContainer'
import { getIsAuthSelector } from '../../../redux/auth/selectors'

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState({
    [usernameField.name]: '',
    [passwordField.name]: '',
  })
  const inputs = [usernameField, passwordField]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(getIsAuthSelector)

  useEffect(() => {
    if (isAuth) {
      navigate('/profile')
    }
  }, [isAuth, navigate])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const payload: FetchSignUserPayload = {
      data: {
        username: credentials[usernameField.name],
        password: credentials[passwordField.name],
      },
    }
    dispatch(signInUserAction(payload))
    setCredentials({
      [usernameField.name]: '',
      [passwordField.name]: '',
    })
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
        <h1 className="text-center">
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </h1>
      </FormContainer>
    </form>
  )
}

export default SignIn
