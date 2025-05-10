import React, { useState } from 'react'
import './SignInForm.css'
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const SignInForm = ({ onLogin }) => {
    const [showPasswordLogin, setShowPasswordLogin] = useState(false);
    const [showErrorLogin, setShowErrorLogin] = useState({
        email: '',
        password: ''
    })
    const [formDataLogin, setFormDataLogin] = useState({
        email: '',
        password: ''
    });
    const navigateLogin = useNavigate();
    // Checks if the form is valid and logs a message
    const handleSubmit = () => {
        handleValidationLogin()
    }
    const handleValidationLogin = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const tempErrorsLogin = {};

        if (formDataLogin.email === '') {
            tempErrorsLogin.email = 'Email can not be blank'
        } else if (formDataLogin.email.length <= 3) {
            tempErrorsLogin.email = 'Email is too short'
        } else if (!emailRegex.test(formDataLogin.email)) {
            tempErrorsLogin.email = 'Email is not valid'
        }
        if (formDataLogin.password === '') {
            tempErrorsLogin.password = 'Password can not be blank'
        } else if (!passwordRegex.test(formDataLogin.password)) {
            tempErrorsLogin.password = 'Must be a-z, number, special character, and correct format'
        }
        setShowErrorLogin(tempErrorsLogin)
        if (Object.keys(tempErrorsLogin).length === 0) {
            console.log('Form submitted');
        } else {
            console.log('Error submmitting form');

        }
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
                        />
                        :
                        <input
                            className='signin-input'
                            type="password"
                            id='Password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            name='password'
                            onChange={handleChangeLogin}
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
                    onClick={handleSubmit}
                    className='signin-submit-btn'>Sign In
                </button>
                <div className='signin-signup-link'>
                    <div className='signin-account-query'>Don't have an account?</div>
                    <div
                        onClick={() => navigateLogin('/signup')}
                        className='signin-signup-text'>
                        <div>Sign up</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInForm