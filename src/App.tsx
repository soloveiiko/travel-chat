import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Basic from "./pages/Basic";
import Login from "./pages/Login";
import SingUp from "./components/Login/SingUp";
import './App.css';

function App() {
    return (
        <div>
            <NavLink className='mr-2' to='/login'>Login</NavLink>
            <NavLink to='/basic'>Basic</NavLink>
            <Routes>
                <Route path='/basic' element={<Basic />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/sing-up' element={<SingUp />}/>
            </Routes>
        </div>
    );
}

export default App;
