import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./login.css"

const Login = () => {
    const nav = useNavigate();

    const LoginButton = () => {
        nav('/Home');
    }

    return(
        <div className='login-container'>
            <div className='padding'>
                <h2 className='login-text'>Login Page</h2>
                <input className='input' type="text" name="" id="" />
                <input className='input' type="password" name="" id="" />
                <button className='butt' onClick={LoginButton}>Login</button>
            </div>
        </div>
    );
};

export default Login;
