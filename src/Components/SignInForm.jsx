import React from 'react'
import './SignInForm.css'

const SignInForm = () => {
    return (
        <div className='background'>
            <div className='container'>
                <div className='header'>Sign in</div>
                <div className='subheader'>Enter your details to continue</div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input
                        type="Email"
                        id='Email'
                        placeholder='john@email.com'
                    />
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input
                        type="Password"
                        id='Password'
                    />
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
        </div>
    )
}

export default SignInForm