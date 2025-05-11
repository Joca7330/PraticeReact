import React, { useState } from 'react'
import './SignInForm.css'
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [showPasswordLogin, setShowPasswordLogin] = useState(false);
    // Stores error messages for each input field
    const [showErrorLogin, setShowErrorLogin] = useState({
        email: '',
        password: ''
    })
    // Store the values of email and password
    const [formDataLogin, setFormDataLogin] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    // Onlcick checks if form is valid and logs message in console
    const handleSubmit = () => {
        handleValidationLogin();
    }
    // Checks if user input is in valid format
    const handleValidationLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const tempErrorsLogin = {};
        if (formDataLogin.email === '') {
            tempErrorsLogin.email = 'Email can not be blank'
        } else if (formDataLogin.email.length <= 4) {
            tempErrorsLogin.email = 'Email is too short'
        } else if (!emailRegex.test(formDataLogin.email)) {
            tempErrorsLogin.email = 'Please enter a valid email address (name@example.com)'
        }
        if (formDataLogin.password === '') {
            tempErrorsLogin.password = 'Password can not be blank'
        } else if (!passRegex.test(formDataLogin.password)) {
            tempErrorsLogin.password = 'Password must be 8+ chars with A-Z, a-z, 0-9, and symbol '
        }
        setShowErrorLogin(tempErrorsLogin)
        if (Object.keys(tempErrorsLogin).length === 0) {
            console.log('Form is submitted');
        } else {
            console.log('Error submitting form');

        }
    }
    // Updates formData with user input
    const handleChangeLogin = (e) => {
        const { name, value } = e.target
        setFormDataLogin(prevState => ({
            ...prevState, [name]: value
        }))
    }
    // Get the value
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
                    onClick={handleSubmit}
                    type='submmit'
                    className='signin-submit-btn'>Sign In
                </button>
                <div className='signin-signup-link'>
                    <div className='signin-account-query'>Don't have an account?</div>
                    <Link className='signin-signup-text' to={'/signup'}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInForm