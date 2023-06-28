import React from "react";
import SingIn from "../../components/Login/SingIn";
import {NavLink} from "react-router-dom";

const Login:React.FC = () => {
    return (
        <div>
            Hi, it's Login page
            <SingIn/>
            <NavLink to='/sing-up'>Sing up</NavLink>
        </div>
    );
};

export default Login;
