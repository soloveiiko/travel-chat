import React from "react";

const SingIn:React.FC = () => {
    return (
        <div className='flex flex-col'>
            <input className='border-2 w-40 mb-1.5' type="email" placeholder='email'/>
            <input className='border-2 w-40 mb-1.5' type="password" placeholder='password'/>
            <button className='border-2 w-40 mb-1.5'>Sing In</button>
        </div>
    );
};

export default SingIn;
