import React, { useState } from 'react'

const OneToggleLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    console.log(isLoggedIn);

    const handleLogin = () => {
        setIsLoggedIn(prevState => !prevState)
    }
    return (
        <div>
            {/* <button onClick={handleLogin}>log in</button> */}
            {isLoggedIn ?
                <div>
                    <h1>Welcome back</h1>
                    <button onClick={handleLogin}>Log out</button>
                </div>
                :
                <div>
                    <h1>Please login</h1>
                    <button onClick={handleLogin}>Log in</button>
                </div>
            }
        </div>
    )
}

export default OneToggleLogin