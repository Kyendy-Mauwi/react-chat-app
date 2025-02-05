import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarUrl: ''
};

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        //we handle logic of either login in or registering
        e.preventDefault();

        console.log(form);
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !isSignup);
    };

    return (
        <div className="auth__form-container"> 
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>
                        { isSignup ? 'Sign Up' : 'Sign In'}
                    </p>
                    <form onSubmit={handleSubmit}>
                        {
                            isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        name="fullName"
                                        type="text"
                                        placeholder="full name" 
                                        onChange={handleChange}
                                        required
                                        />
                                </div>
                            )
                        }
                        <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="fullName">UserName</label>
                                    <input
                                        name="username"
                                        type="text"
                                        placeholder="Username" 
                                        onChange={handleChange}
                                        required
                                        />
                        </div>
                        {
                            isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="phoneNumber" 
                                        onChange={handleChange}
                                        required
                                        />
                                </div>
                            )
                        }
                        { isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="avatarUrl">Avatar URL</label>
                                    <input
                                        name="avatarUrl"
                                        type="text"
                                        placeholder="avatarUrl" 
                                        onChange={handleChange}
                                        required
                                        />
                                </div>
                            )
                        }
                        <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Password" 
                                        onChange={handleChange}
                                        required
                                        />
                        </div>
                        { isSignup && (
                        <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="password">Confirm Password</label>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password" 
                                        onChange={handleChange}
                                        required
                                        />
                        </div>
                        )}
                        
                        <div className="auth__form-container_fields-content_button">
                            <button>
                                { isSignup ? "Sign Up" : "Sign In" }
                            </button>
                        </div>

                    </form>

                    <div className="auth__form-container_fields-account">
                        <p>
                            { isSignup 
                            ? "Already have an account with us ?"
                            : "Don't have an account with us ?"
                            }
                            <span onClick={switchMode}>
                                { isSignup ? " Sign In" : " Sign up" }
                            </span>
                        </p>
                    </div>

                </div>
            </div>

            <div className="auth__form-container_image">
                <img  src={signinImage}  alt="sign in"/>
            </div>

        </div>
    )
}

export default Auth