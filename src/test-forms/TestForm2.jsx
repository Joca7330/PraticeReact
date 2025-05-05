import React, { useState } from 'react';
// Import the CSS file
import './TestForm2.css';

const FormValidation = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    // Form state
    console.log('state', formData);

    // Error state
    const [errors, setErrors] = useState({});
    console.log('state:', errors);

    // Success state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear the error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        let tempErrors = {};
        console.log('temp errors:', tempErrors);
        
        let isValid = true;

        // Username validation
        if (!formData.username.trim()) {
            tempErrors.username = "Username is required";
            isValid = false;
        }

        // Email validation
        if (!formData.email) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
            isValid = false;
        }

        // Password validation
        if (!formData.password) {
            tempErrors.password = "Password is required";
            isValid = false;
        } else if (formData.password.length < 8) {
            tempErrors.password = "Password must be at least 8 characters";
            isValid = false;
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            tempErrors.confirmPassword = "Please confirm your password";
            isValid = false;
        } else if (formData.confirmPassword !== formData.password) {
            tempErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        if (validateForm()) {
            // Form submission logic would go here
            console.log("Form submitted successfully", formData);
            setIsSubmitted(true);

            // Reset form after successful submission
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            // Clear errors
            setErrors({});
        }
    };

    // Reset form
    const handleReset = () => {
        setIsSubmitted(false);
        setErrors({});
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Sign Up Form</h2>

            {isSubmitted ? (
                <div className="success-message">
                    <strong>Success!</strong>
                    <span> Registration successful! Thank you for signing up.</span>
                    <button
                        onClick={handleReset}
                        className="reset-button"
                    >
                        Try Again
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`form-input ${errors.username ? "input-error" : ""}`}
                        />
                        {errors.username && <p className="error-message">{errors.username}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? "input-error" : ""}`}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`form-input ${errors.password ? "input-error" : ""}`}
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`form-input ${errors.confirmPassword ? "input-error" : ""}`}
                        />
                        {errors.confirmPassword && (
                            <p className="error-message">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Sign Up
                    </button>
                </form>
            )}
        </div>
    );
};

export default FormValidation;