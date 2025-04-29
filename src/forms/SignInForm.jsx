import React from 'react'
import './SignInForm.css'
import { IoIosEyeOff } from "react-icons/io";


const SignInForm = () => {
    return (
        <div className='signin-container'>
            <div className='signin-card'>
                <div className='signin-title'>Sign in</div>
                <div className='signin-instructions'>Enter your details to continue</div>
                <div className='signin-input-label'>
                    <label
                        className='signin-label'
                        htmlFor="Email">Email</label>
                    <input
                        className='signin-input'
                        type="Email"
                        id='Email'
                        placeholder='john@email.com'
                    />
                </div>
                <div className='signin-input-label'>
                    <label
                        className='signin-label'
                        htmlFor="Password">Password</label>
                    <input
                        className='signin-input'
                        type="password"
                        id='Password'
                        placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                    />
                    <div className='password-visibility'>
                        <IoIosEyeOff />
                    </div>

                    {/* <div>
                    <IoIosEyeOff />
                </div> */}
                </div>
                <div className='signin-password-reset'>Forgot password?</div>
                <button
                    type='submmit'
                    className='signin-submit-btn'>Sign In
                </button>
                <div className='signin-signup-link'>
                    <div className='signin-account-query'>Don't have an account?</div>
                    <div className='signin-signup-text'>Sign up</div>
                </div>
            </div>

        </div>
    )
}

export default SignInForm