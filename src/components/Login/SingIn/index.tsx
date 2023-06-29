import React, {useEffect} from 'react';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

type SingInForm = {
    email: string,
    password: string,
}
const SingIn: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [isDisabled, setIsDisabled] = React.useState(true);

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required!'),
        password: Yup.string().required('Password is required!').min(8).max(16)
    });
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<SingInForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: SingInForm) => {
        console.log(JSON.stringify(data, null, 2));
        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        if (email && password) {
            // setIsDisabled(false);
        }
    }, [email, password])

    const onChangeEmail = (e: { target: { value: string; }; }) => {
        setEmail(e.target.value.toLowerCase());
    }
    const onChangePassword = (e: { target: { value: string; }; }) => {
        setPassword(e.target.value.toLowerCase());
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
              <div>
                  <input
                    className='border-2 w-50 mb-1.5'
                    type='email'
                    value={email}
                    placeholder='Email'
                    {...register('email')}
                    onChange={onChangeEmail}
                  />
                  <div>{errors.email?.message}</div>
              </div>
              <div>
                  <input
                    className='border-2 w-50 mb-1.5'
                    type='password'
                    value={password}
                    placeholder='Password'
                    {...register('password')}
                    onChange={onChangePassword}
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
