import React, { useState } from 'react'
import './SignInForm.css'
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";


const SignInForm = ({ onLogin }) => {

    const [showPasswordLogin, setShowPasswordLogin] = useState(false);

    const [showErrorLogin, setShowErrorLogin] = useState({
        email: '',
        password: ''
    })
    console.log('show errors:', showErrorLogin);

    const [formDataLogin, setFormDataLogin] = useState({
        email: '',
        password: ''
    });
    console.log('user input:', formDataLogin);

    const handleValidationLogin = () => {
        const tempErrorsLogin = {};

        if (formDataLogin.email === '') {
            tempErrorsLogin.email = 'Email can not be blank'
        } if (formDataLogin.password === '') {
            tempErrorsLogin.password = 'Password can not be blank'
            console.log('temp errors:', tempErrorsLogin);
        }
        setShowErrorLogin(tempErrorsLogin)
    }

    const handleChangeLogin = (e) => {
        const { name, value } = e.target
        setFormDataLogin(prevState => ({
            ...prevState, [name]: value
        }))
    }

    const togglePassword = () => {
        setShowPasswordLogin(prevState => !prevState)
    }
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
                        name='email'
                        onChange={handleChangeLogin}
                        onBlur={handleValidationLogin}
                    />
                    <div className='error-text'>
                        {showErrorLogin.email
                            &&
                            showErrorLogin.email}
                    </div>
                </div>
                <div className='signin-input-label'>
                    <label
                        className='signin-label'
                        htmlFor="Password">Password</label>
                    {showPasswordLogin ?
                        <input
                            className='signin-input'
                            type="text"
                            id='Password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            name='password'
                            onChange={handleChangeLogin}
                            onBlur={handleValidationLogin}
                        />
                        :
                        <input
                            className='signin-input'
                            type="password"
                            id='Password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            name='password'
                            onChange={handleChangeLogin}
                            onBlur={handleValidationLogin}
                        />
                    }
                    <div className='error-text'>
                        {showErrorLogin.password
                            &&
                            showErrorLogin.password}
                    </div>
                    {showPasswordLogin ?
                        <div className='password-visibility'>
                            <IoIosEyeOff
                                onClick={togglePassword}
                            />
                        </div>
                        :
                        <div className='password-visibility'>
                            <FaEye
                                onClick={togglePassword}
                            />
                        </div>
                    }
                </div>
                <div className='signin-password-reset'>Forgot password?</div>
                <button
                    type='submmit'
                    className='signin-submit-btn'>Sign In
                </button>
                <div className='signin-signup-link'>
                    <div className='signin-account-query'>Don't have an account?</div>
                    <div
                        onClick={onLogin}
                        className='signin-signup-text'>
                        <div>Sign up</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInForm