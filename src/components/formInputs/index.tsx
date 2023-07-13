import { useState } from 'react'

export const usernameField = {
  name: 'username',
  type: 'text',
  placeholder: 'Username',
  errorMessage:
    "Username should be 3-16 characters and shouldn't include any special character!",
  label: 'Username',
  pattern: '^[A-Za-z0-9]{3,16}$',
  required: true,
}

export const emailField = {
  name: 'email',
  type: 'email',
  placeholder: 'Email',
  errorMessage: 'It should be a valid email address!',
  label: 'Email',
  required: true,
}

export const birthdayField = {
  name: 'birthday',
  type: 'date',
  placeholder: 'Birthday',
  label: 'Birthday',
}

export const passwordField = {
  name: 'password',
  type: 'password',
  placeholder: 'Password',
  errorMessage:
    'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
  label: 'Password',
  pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{8,20}$`,
  required: true,
}

export const passwordConfirmField = {
  name: 'confirmPassword',
  type: 'password',
  placeholder: 'Confirm Password',
  errorMessage: "Passwords don't match!",
  label: 'Confirm Password',
  required: true,
}

const FormInput = (props: any) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className="w-full">
      <label className="block">{label}</label>
      <input
        className="block w-full"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="hidden text-red-600">{errorMessage}</span>
    </div>
  )
}

export default FormInput
