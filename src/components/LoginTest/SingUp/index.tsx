import React, { useState } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUpUserAction } from '../../../redux/auth/action'

type SingUpForm = {
  username: string
  password: string
}
const SingUp: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!').min(8).max(16),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpForm>({
    resolver: yupResolver(validationSchema),
  })

  const handleChange = (e: any) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  const onSubmit = (auth: any) => {
    dispatch(signUpUserAction({ data: credentials }))
    setCredentials({ username: '', password: '' })
    navigate('/profile')
  }
  return (
    <form className="grid place-items-center" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-10 text-xl">Hi, it's Sing Up page</h1>
      <div className="border-2 p-6">
        <div>
          <label htmlFor="">Username: </label>
          <input
            className="mb-1.5 w-40 border-2"
            type="text"
            value={credentials.username}
            placeholder="А-я, A-z, 1-0"
            {...register('username')}
            onChange={handleChange}
          />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            className="mb-1.5 w-40 border-2"
            type="password"
            value={credentials.password}
            placeholder="8-16"
            {...register('password')}
            onChange={handleChange}
          />
          <div>{errors.password?.message}</div>
        </div>
        <button className="mb-1.5 w-40 border-2">Sing Up</button>
      </div>
    </form>
  )
}

export default SingUp
