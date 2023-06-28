import React from "react";

const SingUp:React.FC = () => {
    return (
        <div className='flex flex-col'>
            <input className='border-2 w-40 mb-1.5' type="email" placeholder='email'/>
            <input className='border-2 w-40 mb-1.5' type="text" placeholder='username'/>
            <input className='border-2 w-40 mb-1.5' type="password" placeholder='password'/>
            <button className='border-2 w-40 mb-1.5'>Sing Up</button>
        </div>
    );
};

export default SingUp;
