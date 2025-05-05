import React, { useState } from 'react'
import './SignUpForm.css'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FaEye } from "react-icons/fa";


const SignUpForm = ({ onLogout }) => {
    const [showPasswordSignUp, setShowPasswordSignUp] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    // Stores error messages for each input field
    const [showError, setShowError] = useState({
        username: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    // Checks if user input is in valid format
    const handleValidation = () => {
        // Detects if there are any errors and sends to showErrors state
        const tempErrors = {};
        // Error messages are stored in tempErrors if fields are left blank
        if (formData.username === '') {
            tempErrors.username = 'Full name can not be empty'
        } if (formData.dateOfBirth === '') {
            tempErrors.dateOfBirth = 'Date of birth can not be empty'
        }
        if (formData.email === '') {
            tempErrors.email = 'Email can not be empty'
        } if (formData.password === '') {
            tempErrors.password = 'Password can not be empty'
        } if (formData.confirmPassword === '') {
            tempErrors.confirmPassword = 'Confirm password can not be empty'
        }
        // console.log('temp errors:', tempErrors.username, tempErrors.password, tempErrors.email, tempErrors.confirmPassword);
        // Updates showErrors stae with error messages
        setShowError(tempErrors)
        // e.preventDefault()
    }
    const [formData, setFormData] = useState({
        username: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    // Updates the new formData with the old data when changes are made to the input field
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState, [name]: value
        }))
    }
    // Get the value of what the user types into the input field
    const toggleShowPassword = () => {
        setShowPasswordSignUp(prevState => !prevState)
    }
    const toggleConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState)
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
                        placeholder='John Doe'
                        name='username'
                        onChange={handleChange}
                        onBlur={handleValidation}
                    />
                    <div className='error-text'>
                        {showError.username
                            &&
                            showError.username}
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
                        placeholder='Jan, 12 1980'
                        name='dateOfBirth'
                        onChange={handleChange}
                        onBlur={handleValidation}
                    />
                    <div className='error-text'>
                        {showError.dateOfBirth
                            &&
                            showError.dateOfBirth}
                    </div>
                </div>
                <div className='signup-input-label'>
                    <label
                        className='signup-label'
                        htmlFor="email">Email</label>
                    <input
                        className='signup-input'
                        type="email"
                        id='email'
                        placeholder='john@email.com'
                        name='email'
                        onChange={handleChange}
                        onBlur={handleValidation}
                    />
                    <div className='error-text'>
                        {showError.email
                            &&
                            showError.email}
                    </div>
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
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleValidation}
                        />
                        :
                        <input
                            className='signup-input'
                            type="password"
                            id='password'
                            name='password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            onChange={handleChange}
                            onBlur={handleValidation}
                        />
                    }
                    <div className='error-text'>
                        {showError.password
                            &&
                            showError.password}
                    </div>
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
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            name='confirmPassword'
                            onChange={handleChange}
                            onBlur={handleValidation}
                        />
                        :
                        <input
                            className='signup-input'
                            type="password"
                            id='confirm-password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            name='confirmPassword'
                            onChange={handleChange}
                            onBlur={handleValidation}
                        />
                    }
                    <div className='error-text'>
                        {showError.confirmPassword
                            &&
                            showError.confirmPassword}
                    </div>
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










