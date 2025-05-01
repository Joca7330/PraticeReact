import React, { useState } from 'react'
import './SignUpForm.css'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FaEye } from "react-icons/fa";


const SignUpForm = ({ onLogout }) => {

    const [showPasswordSignUp, setShowPasswordSignUp] = useState(false)
    // console.log('show password:', showPasswordSignUp);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    console.log('confirm password:', showConfirmPassword);
    const toggleShowPassword = () => {
        setShowPasswordSignUp(prevState => !prevState)
    }
    const toggleConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState)
    }
    const toggleDate = () => {
    }

    return (
        <div className='signup-container'>
            <div className='signup-card'>
                <div className='signup-title'>Sign Up</div>
                <div className='signup-instructions'>Enter your details to continue</div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="name">Full name</label>
                    <input
                        className='signup-input'
                        type="text"
                        id='name'
                        placeholder='John Doe' />
                    <div>
                        there is an error
                    </div>
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="date">Date of birth</label>
                    <input
                        className='signup-input'
                        type="date"
                        id='date'
                        placeholder='Jan, 12 1980' />
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="email">Email</label>
                    <input
                        className='signup-input'
                        type="email"
                        id='email'
                        placeholder='john@email.com' />
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="password">Password</label>
                    {showPasswordSignUp ?
                        <input
                            className='signup-input'
                            type="text"
                            id='password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                        :
                        <input
                            className='signup-input'
                            type="password"
                            id='password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                    }
                    {showPasswordSignUp ?
                        <span className='password-visibility'>
                            <MdOutlineVisibilityOff
                                onClick={toggleShowPassword}
                            />
                        </span>
                        :
                        <span className='password-visibility'>
                            <FaEye
                                onClick={toggleShowPassword}
                            />
                        </span>
                    }
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="confirm-password">Confirm Password</label>
                    {showConfirmPassword ?
                        <input
                            className='signup-input'
                            type="text"
                            id='confirm-password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                        :
                        <input
                            className='signup-input'
                            type="password"
                            id='confirm-password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                    }
                    {showConfirmPassword ?
                        <span className='password-visibility'>
                            <MdOutlineVisibilityOff
                                onClick={toggleConfirmPassword}
                            />
                        </span>
                        :
                        <span className='password-visibility'>
                            <FaEye
                            onClick={toggleConfirmPassword}
                            />
                        </span>
                    }
                </div>
                <button
                    className='signup-submit-btn'>Sign Up</button>
                <button className='signup-account-signin'>
                    <div className='signup-account-query'>Already have an account?</div>
                    <div 
                    onClick={onLogout}
                    className='signup-signin-link'>
                        <div>Sign in</div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SignUpForm