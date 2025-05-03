import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm({ onLoginSuccess, buttonText = "Submit" }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = data => {
        console.log(data);
        // Call the callback passed from parent component
        if (onLoginSuccess) onLoginSuccess(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="form-group">
                <input
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email"
                    className="form-control"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className="form-group">
                <input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    type="password"
                    placeholder="Password"
                    className="form-control"
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            <button type="submit" className="submit-button">{buttonText}</button>
        </form>
    );
}

export default LoginForm;
