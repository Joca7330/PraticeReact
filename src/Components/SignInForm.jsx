import React from 'react'
import './SignInForm.css'

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
                        type="Password"
                        id='Password'
                    />
                </div>
                <button className='forgot-password'>Forgot password?</button>
                <button
                    type='submmit'
                    className='btn'>Sign In
                </button>
            </div>

        </div>
    )
}

export default SignInForm