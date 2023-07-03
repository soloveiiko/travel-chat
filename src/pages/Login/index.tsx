import React from "react";
import SingIn from "../../components/Login/SingIn";
import {NavLink} from "react-router-dom";

const Login:React.FC = () => {

    return (
        <div className='grid place-items-center'>
            <h1 className='mb-10 text-xl'>Hi, it's Login page</h1>
            <div className='border border-black p-6'>
                <SingIn/>
                <NavLink to='/sing-up'>Sing up</NavLink>
            </div>
        </div>
    );
};

export default Login;
