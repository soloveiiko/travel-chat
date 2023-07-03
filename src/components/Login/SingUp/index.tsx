import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

type SingUpForm = {
    email: string,
    username: string,
    password: string
}
const SingUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isDisabled, setIsDisabled] = React.useState(true);
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        email: Yup.string().required('Email is required!').email().matches(/@[^.]*\./),
        password: Yup.string().required('Password is required!').min(8).max(16)
    });
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<SingUpForm>({
        resolver: yupResolver(validationSchema)
    })

    useEffect(() => {
        if (email && username && password) {
            // setIsDisabled(false)
        }
    }, [email, username, password])

    const onChangeEmail = (e: { target: { value: string; }; }) => {
        setEmail(e.target.value.toLowerCase());
    }
    const onChangeUsername = (e: { target: { value: string; }; }) => {
        setUsername(e.target.value.toLowerCase());
    }
    const onChangePassword = (e: { target: { value: string; }; }) => {
        setPassword(e.target.value.toLowerCase());
    }
    const onSubmit = (data: SingUpForm) => {
        console.log(JSON.stringify(data, null, 2))
        setEmail('');
        setUsername('');
        setPassword('');
    }

    return (
      <form className='grid place-items-center'
            onSubmit={handleSubmit(onSubmit)}>
          <h1 className='mb-10 text-xl'>Hi, it's Sing Up page</h1>
          <div className='border-2 p-6'>
              <div>
                  <label htmlFor="">Email: </label>
                  <input
                    className='border-2 w-40 mb-1.5'
                    type="text"
                    value={email}
                    placeholder='example@gmail.com'
                    {...register('email')}
                    onChange={onChangeEmail}
                  />
                  <div>{errors.email?.message}</div>
              </div>
              <div>
                  <label htmlFor="">Username: </label>
                  <input
                    className='border-2 w-40 mb-1.5'
                    type="text"
                    value={username}
                    placeholder='А-я, A-z, 1-0'
                    {...register('username')}
                    onChange={onChangeUsername}
                  />
                  <div>{errors.username?.message}</div>
              </div>
              <div>
                  <label htmlFor="">Password: </label>
                  <input
                    className='border-2 w-40 mb-1.5'
                    type="password"
                    value={password}
                    placeholder='8-16'
                    {...register('password')}
                    onChange={onChangePassword}
                  />
                  <div>{errors.password?.message}</div>
              </div>
              <button
                className='border-2 w-40 mb-1.5'
                // disabled={isDisabled}
              >Sing Up
              </button>
          </div>
      </form>
    );
};

export default SingUp;
