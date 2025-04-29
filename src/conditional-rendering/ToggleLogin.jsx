import React, { useState } from 'react'

const ToggleLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log('state:', isLoggedIn);

    const handleLogin = () => {
        // setIsLoggedIn(prevState => !prevState)
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (

        <div>
            {isLoggedIn && (
                <div>
                    <h1>Welcome back, Pocahontis</h1>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            )}
            {!isLoggedIn && (
                <div>
                    <h1>Please login, Jesus</h1>
                    <button onClick={handleLogin}>Log In</button>
                </div>
            )}
        </div>
    )
}

export default ToggleLogin