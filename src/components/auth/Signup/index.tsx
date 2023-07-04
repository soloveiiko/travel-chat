// import React from 'react'
import PasswordField from '../../PasswordField'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <section>
      <input type="email" />
      <PasswordField id="sdf" />
      <PasswordField id="sdfdfg" />
      <button className="btn btn-primary">Sign Up</button>
      <h1>Have an account?</h1>
      <NavLink to="/login">Login</NavLink>
    </section>
  )
}

export default Signup
