import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInUserAction } from '../../../redux/auth/action'
import FormInput, {
  emailField,
  passwordField,
  usernameField,
} from '../../formInputs'
import FormContainer from '../../styled/FormContainer'
import { getIsAuthSelector } from '../../../redux/auth/selectors'
import { auth, signInWithEmailAndPassword } from '../../../firebase/firebase'

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState({
    [usernameField.name]: '',
    [emailField.name]: '',
    [passwordField.name]: '',
  })
  const inputs = [usernameField, emailField, passwordField]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(getIsAuthSelector)

  useEffect(() => {
    if (isAuth) {
      navigate('/profile')
    }
  }, [isAuth])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      credentials[emailField.name],
      credentials[passwordField.name]
    )
      .then((userAuth) => {
        dispatch(
          signInUserAction({
            data: {
              username: userAuth.user.displayName,
              email: userAuth.user.email,
              password: credentials[passwordField.name],
            },
          })
        )
        setCredentials({
          [usernameField.name]: '',
          [emailField.name]: '',
          [passwordField.name]: '',
        })
      })
      .catch((err) => {
        alert(err)
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
