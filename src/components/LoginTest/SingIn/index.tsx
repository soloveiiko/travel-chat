import React, { useState } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { signInUserAction } from '../../../redux/auth/action'

type SignInForm = {
  username: string
  password: string
}
const SingIn: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!').min(8).max(16),
  })
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = () => {
    dispatch(signInUserAction({ data: credentials }))
    setCredentials({ username: '', password: '' })
    // setEmail('');
    // setPassword('');
  }

  // const onChangeEmail = (e: { target: { value: string; }; }) => {
  //     setEmail(e.target.value.toLowerCase());
  // }
  // const onChangePassword = (e: { target: { value: string; }; }) => {
  //     setPassword(e.target.value.toLowerCase());
  // }
  const handleChange = (e: any) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div>
          <input
            className="w-50 mb-1.5 border-2"
            type="text"
            value={credentials.username}
            placeholder="username"
            {...register('username')}
            onChange={handleChange}
          />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <input
            className="w-50 mb-1.5 border-2"
            type="password"
            value={credentials.password}
            placeholder="Password"
            {...register('password')}
            onChange={handleChange}
          />
          <div>{errors.password?.message}</div>
        </div>
      </div>
      <button
        className="mb-1.5 border-2 pl-1 pr-1"
        // disabled={isDisabled}
        type="submit"
      >
        Sing In
      </button>
    </form>
  )
}

export default SingIn
