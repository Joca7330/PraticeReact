import React from 'react'
import './SignUpForm.css'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";


const SignUpForm = () => {
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
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="date">Date of birth</label>
                    <input
                        className='signup-input'
                        type="text"
                        id='date'
                        placeholder='Jan, 12 1980' />
                    <span className='calendar-icon'>
                        <MdOutlineCalendarMonth />
                    </span>
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="email">Email</label>
                    <input
                        className='signup-input'
                        type="text"
                        id='email'
                        placeholder='john@email.com' />
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="password">Password</label>
                    <input
                        className='signup-input'
                        type="password"
                        id='password'
                        placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                    <span className='password-visibility'>
                        <MdOutlineVisibilityOff />
                    </span>
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="confirm-password">Confirm Password</label>
                    <input
                        className='signup-input'
                        type="password"
                        id='confirm-password'
                        placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                    <span className='password-visibility'>
                        <MdOutlineVisibilityOff />
                    </span>
                </div>
                <button className='signup-submit-btn'>Sign Up</button>
                <button className='signup-account-signin'>
                    <div className='signup-account-query'>Already have an account?</div>
                    <div className='signup-signin-link'>Sign In</div>
                </button>
            </div>
        </div>
    )
}

export default SignUpForm