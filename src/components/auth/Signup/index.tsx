import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormInput, {
  usernameField,
  passwordField,
  passwordConfirmField,
} from '../../formInputs'
import FormContainer from '../../styled/FormContainer'

const SignupExp = () => {
  const [values, setValues] = useState({
    [usernameField.name]: '',
    [passwordField.name]: '',
    [passwordConfirmField.name]: '',
  })

  const inputs = [
    usernameField,
    passwordField,
    { ...passwordConfirmField, pattern: values.password },
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Submitting...', values)
  }

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h1 className="text-center">SignUp</h1>
        {inputs.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            value={values[input.name]}
            onChange={onChange}
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

export default SignupExp
