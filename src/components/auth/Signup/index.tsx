// import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormContainer from '../../styled/FormContainer'

const Signup = () => {
  const [formIsValid] = useState(true)

  const sendData = () => {
    console.log('sending data from signup...')
  }
  return (
    <FormContainer>
      <h1>Email</h1>
      <input type="email" id="email" />
      <h1>password</h1>
      <input type="password" id="pass" />
      <h1>Confirm password</h1>
      <input type="password" id="passconfirm" />
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

export default Signup
