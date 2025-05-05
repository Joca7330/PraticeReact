
import { React, useState } from 'react'
import SignInForm from './forms/SignInForm'
import SignUpForm from './forms/SignUpForm'
import DetailsToggle from './conditional-rendering/AuthForms'
import ToggleLogin from './conditional-rendering/ToggleLogin'
import OneToggleLogin from './conditional-rendering/OneToggleLogin'
import LoginForm from './test-forms/TestForm1'



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogIn = () => {
    setIsLoggedIn(true);
  }
  const handleLogOut = () => {
    setIsLoggedIn(false);
  }


  return (
    <div className='backdrop'>
      <div className='form-2-container'>
        {!isLoggedIn ?
          <div>
            <SignInForm
              isLoggedIn={isLoggedIn}
              onLogin={handleLogIn} />
          </div>
          : <SignUpForm
            onLogout={handleLogOut} />}
      </div>
    </div>
  )
}


// function App() {
//   const [isSignUp, setIsSignUp] = useState(false)
//   const handleLoginSuccess = (userData) => {
//     // Handle successful login (e.g., store user data, redirect)
//     console.log('Login successful!', userData);
//   };
//   return (
//     <div className="app">
//       {isSignUp ?
//         <div>
//           <h1>Welcome to My App</h1>
//           <LoginForm
//             onLoginSuccess={handleLoginSuccess}
//             buttonText="Sign In"
//           />
//         </div>
//         :
//         <FormValidation />
//       }
//     </div>
//   );
// }



export default App