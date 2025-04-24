import React from 'react'
import './SignInForm.css'
import { IoIosEyeOff } from "react-icons/io";


const SignInForm = () => {
    return (
        <div className='form-container'>
            <div className='form'>
                <div className='form-title'>Sign in</div>
                <div className='form-subtitle'>Enter your details to continue</div>
                <div className='container'>
                    <label
                        className='label'
                        htmlFor="Email">Email</label>
                    <input
                        className='input'
                        type="Email"
                        id='Email'
                        placeholder='john@email.com'
                    />
                </div>
                <div className='container'>
                    <label
                        className='label'
                        htmlFor="Password">Password</label>
                    <input
                        className='input'
                        type="password"
                        id='Password'
                        placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                    />
                    <div className='react-icon'>
                        <IoIosEyeOff />
                    </div>

                    {/* <div>
                    <IoIosEyeOff />
                </div> */}
                </div>
                <button className='forgot-password'>Forgot password?</button>
                <button
                    type='submmit'
                    className='btn'>Sign In
                </button>
                <button className='sign-up'>
                    <div className='text-1'>Don't have an account?</div>
                    <div className='text-2'>Sign up</div>
                </button>
            </div>

        </div>
    )
}

export default SignInForm