import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignUpForm.css'
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const SignUpForm = () => {
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
    // Checks if form is valid and display message in console when sign up button is clicked
    const handleSubmit = () => {
        handleValidation();
    }
    // Checks if user input is in valid format
    const handleValidation = () => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Detects if there are any errors and sends to showErrors state
        const tempErrors = {};
        // Error messages are stored in tempErrors if fields are left blank
        if (formData.username === '') {
            tempErrors.username = 'Full name can not be empty'
        } else if (formData.username.length <= 3) {
            tempErrors.username = 'Full name is too short'
        }
        if (formData.dateOfBirth === '') {
            tempErrors.dateOfBirth = 'Date of birth can not be empty'
        }
        if (formData.email === '') {
            tempErrors.email = 'Email can not be empty'
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address (name@example.com)'
        }
        if (formData.password === '') {
            tempErrors.password = 'Password can not be empty'
        } else if (!passRegex.test(formData.password)) {
            tempErrors.password = 'Password must be 8+ chars with A-Z, a-z, 0-9, and symbol '
        }
        if (formData.confirmPassword === '') {
            tempErrors.confirmPassword = 'Confirm password can not be empty'
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords do not match'
        }
        // Updates showErrors stae with error messages
        setShowError(tempErrors)
        if (Object.keys(tempErrors).length === 0) {
            console.log('Form is submitted');
        } else {
            console.log('Error submitting form');
        }
    }
    // Stores the value of what the user types into the input fields
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
                        />
                        :
                        <input
                            className='signup-input'
                            type="password"
                            id='password'
                            name='password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            onChange={handleChange}
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
                        />
                        :
                        <input
                            className='signup-input'
                            type="password"
                            id='confirm-password'
                            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                            name='confirmPassword'
                            onChange={handleChange}
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
                    // On click handles validation and sbumits if error-free
                    onClick={handleSubmit}
                    className='signup-submit-btn'>Sign Up</button>
                <button
                    className='signup-account-signin'>
                    <div className='signup-account-query'>Already have an account?</div>
                    <Link className='signup-signin-link' to={'/signin'}>Sign in</Link>
                </button>
            </div>
        </div>
    )
}

export default SignUpForm










