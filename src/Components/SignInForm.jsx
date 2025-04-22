import React from 'react'
import './SignInForm.css'

const SignInForm = () => {
    return (
        <div className='form-container'>
            <div className='form'>
                <div className='form-title'>Sign in</div>
                <div className='form-subtitle'>Enter your details to continue</div>
                <div className='label-container-1'>
                    <label 
                    className='email-label'
                    htmlFor="Email">Email</label>
                    <input
                    className='input-1'
                        type="Email"
                        id='Email'
                        placeholder='john@email.com'
                    />
                </div>
                <div className='label-container-1'>
                    <label 
                    className='password-label'
                    htmlFor="Password">Password</label>
                    <input
                    className='input-2'
                        type="Password"
                        id='Password'
                    />
                    </div>
                    <div>
                        <h3>Forgot Password</h3>
                    </div>
                    <div>
                        <a href="">Forgot Password</a>
                    </div>
                    <button
                        type='submmit'
                        className='sign-in'>Sign In </button>

            </div>
        </div>
    )
}

export default SignInForm