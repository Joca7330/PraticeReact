// import React, { useState } from 'react'


// const AuthForms = () => {
// const [showSignup,setShowSignup] = useState(true)

// const handleSignup = (e) => {
//     e.prevent.default()
//     setShowSignup(false)
// } 


//   return (
//     <div>
//         {showSignup && (
//             <div></div>
//         )}
//     </div>
//   )
// }

import React, { useState } from 'react'

const AuthForms = () => {

    const [showDetails, setShowDetails] = useState(true)
    console.log('state:', showDetails);

    return (
        <div>
            {showDetails && (
                <div>📦 show details</div>
            )}
            {!showDetails && (
                <div>🙈 hide details</div>
            )}
            <button onClick={() => showDetails ? setShowDetails(false) : setShowDetails(true)}>
                {showDetails ? "hello" : "goodbye"}
            </button>
            {/* <button onClick={() => setShowDetails(!showDetails)}> */}
                {/* {showDetails ? "Hide details" : "Show details"} */}
            {/* </button> */}

        </div>
    )
}

export default AuthForms







