import { useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

const PasswordField = ({ id }: { id: string }) => {
  const [showPassword, setShowPassword] = useState('password')

  const toggleViewPassword = () => {
    setShowPassword((state) => (state === 'password' ? 'text' : 'password'))
  }

  return (
    <div className="m-2 rounded-md border border-slate-500">
      <input
        className="m-0 w-[90%] rounded-md border border-slate-100 outline-none"
        type={showPassword}
        id={id}
        name="password"
        minLength={8}
        placeholder="password"
        required
      />
      <button onClick={toggleViewPassword}>
        {showPassword === 'password' ? <BsEye /> : <BsEyeSlash />}
      </button>
    </div>
  )
}

export default PasswordField
