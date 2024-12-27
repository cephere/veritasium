import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

const Login = () => {
    const nav = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission
        nav('/Home'); // Navigate to the Home route
    };

    return (
        <div className='login-container'>
            <div className='padding'>
                <h2 className='login-text'>Login Page</h2>
                <form onSubmit={handleLogin}>
                    <input className='input' type="text" placeholder="Input username" required />
                    <input className='input' type="password" placeholder="Input password" required />
                    <br />
                    <button className='butt' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
