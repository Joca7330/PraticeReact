import { React, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignInForm from './forms/SignInForm'
import SignUpForm from './forms/SignUpForm'
import DetailsToggle from './conditional-rendering/AuthForms'
import ToggleLogin from './conditional-rendering/ToggleLogin'
import OneToggleLogin from './conditional-rendering/OneToggleLogin'
import LoginForm from './test-forms/TestForm1'
import NotFound from './test-forms/NotFound'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  console.log('state:', isLoggedIn);
  
  const handleLogIn = () => {
    setIsLoggedIn(true);
  }
  const handleLogOut = () => {
    setIsLoggedIn(false);
  }
  return (
    
    <BrowserRouter>
      <div className="backdrop">
        <div className="form-2-container">
          <Routes>
            <Route
              path="/signup"
              element={<SignUpForm />}
              // path='/signup'
              // element={<Navigate to='/signin' />}
              // element={
              //   isLoggedIn ? (
                  // <Navigate to="/signin" replace />
              //   ) : (
              //     <SignInForm isLoggedIn={isLoggedIn} onLogin={handleLogIn} />
              //   )
              // }
            />
            <Route
              path="/signin"
              element={<SignInForm />}
              // element={
              //   isLoggedIn ? (
              //     <SignUpForm onLogout={handleLogOut} />
              //   ) : (
              //     <Navigate to="/signin" replace />
              //   )
              // }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )

}




//     <BrowserRouter>
//       <div className='backdrop'>
//         <div className='form-2-container'>
//           {/* Define your Routes */}
//           <Routes>
//             {/* Route for /signin */}
//             <Route path="/signin" element=
//             {
//               <SignInForm />
//               // !isLoggedIn ? 
//               //   <SignInForm isLoggedIn={isLoggedIn} onLogin={handleLogIn} /> : 
//               //   <SignUpForm onLogout={handleLogOut} />
//             } />
//             {/* Route for /signup */}
//             <Route path="/signup" element={<SignUpForm onLogout={handleLogOut} />} />
//             {/* Other routes can be added as needed */}
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

export default App
