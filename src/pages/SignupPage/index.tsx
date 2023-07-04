import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import PasswordField from '../../components/PasswordField'

const SignupPage = () => {
  const [formIsValid, setFormIsValid] = useState(true)

  const sendData = () => {
    console.log('sending data...')
  }
  return (
    <FormContainer>
      <h1 className="text-center">SignUp page</h1>
      <h1>Email</h1>
      <input type="email" id="email" />
      <h1>password</h1>
      <PasswordField id="pass" />
      <h1>Confirm password</h1>
      <PasswordField id="passconfirm" />
      <button
        disabled={formIsValid}
        className="btn btn-primary"
        onClick={sendData}
      >
        Sign Up
      </button>
      <h1 className="text-center">
        Have an account? <NavLink to="/login">Login</NavLink>
      </h1>
    </FormContainer>
  )
}

export default SignupPage
