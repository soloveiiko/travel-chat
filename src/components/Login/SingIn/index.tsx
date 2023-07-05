import React, {useState} from 'react';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from "react-redux";
import {signUpUserAction} from "../../../redux/auth/action";

type SignInForm = {
    username: string,
    password: string,
}
const SingIn: React.FC = () => {
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');
    const [credentials, setCredentials] = useState({ username: "", password: "" });


    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string().required('Password is required!').min(8).max(16)
    });
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<SignInForm>({
        resolver: yupResolver(validationSchema)
    });
    const dispatch = useDispatch();

    const onSubmit = (credentials: any) => {
        dispatch(signUpUserAction(credentials));
        // console.log(JSON.stringify(data, null, 2));
        // console.log(credentials)
        // setEmail('');
        // setPassword('');
    }

    // const onChangeEmail = (e: { target: { value: string; }; }) => {
    //     setEmail(e.target.value.toLowerCase());
    // }
    // const onChangePassword = (e: { target: { value: string; }; }) => {
    //     setPassword(e.target.value.toLowerCase());
    // }
    const handleChange = (e:any) =>
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
              <div>
                  <input
                    className='border-2 w-50 mb-1.5'
                    type='text'
                    value={credentials.username}
                    placeholder='username'
                    {...register('username')}
                    onChange={handleChange}
                  />
                  <div>{errors.username?.message}</div>
              </div>
              <div>
                  <input
                    className='border-2 w-50 mb-1.5'
                    type='password'
                    value={credentials.password}
                    placeholder='Password'
                    {...register('password')}
                    onChange={handleChange}
                  />
                  <div>{errors.password?.message}</div>
              </div>
          </div>
              <button className='border-2 mb-1.5 pl-1 pr-1'
                // disabled={isDisabled}
                      type='submit'>Sing In
              </button>
      </form>
    );
};

export default SingIn;
