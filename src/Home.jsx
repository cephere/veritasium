import React from 'react';
import { NavLink } from 'react-router-dom';

import "./home.css"

const Home = () => {
    return(
        <div className="container">
            <div className="topnav">
                <div className="nav-left">
                    <h2>VERITASIUM: FAKE NEWS DETECTION</h2>
                </div>

                <div className="nav-right">
                    <h2>Hello, User</h2>
                    <img className="icon" src="icon.png" alt="" />
                    
                    <h2><NavLink className='Navlink' to="/">| Logout</NavLink></h2>
                </div>
            </div>

            <div className="box">
                <h2 className="box-text-header">Input News Article</h2>
                <input type="text" className="text-box"  />
                
                <div style={{padding: "15px"}}>
                    <button className="butt" style={{ fontSize: '20px' }}>PREDICT</button>
                </div>
            </div>         

            <div className="container-vertical">
                <div className="container-horizontal">
                    <div>
                        <h2 className='container-text'>ALGORITM</h2>
                        <h2 className='container-text'>100%</h2>
                        <a href="https://www.geeksforgeeks.org/machine-learning-algorithms/">More Details</a>
                    </div>
                </div>

                <div className="container-horizontal">
                    <h2 className='container-text'>ALGORITM</h2>
                    <h2 className='container-text'>100%</h2>
                    <a href="https://www.geeksforgeeks.org/machine-learning-algorithms/">More Details</a>
                </div>

                <div className="container-horizontal">
                    <h2 className='container-text'>ALGORITM</h2>
                    <h2 className='container-text'>100%</h2>
                    <a href="https://www.geeksforgeeks.org/machine-learning-algorithms/">More Details</a>
                </div>
            </div>  
        </div>
    );
};

export default Home;
