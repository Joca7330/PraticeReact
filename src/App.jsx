
import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInForm from './forms/SignInForm'
import SignUpForm from './forms/SignUpForm'
import NotFound from './forms/NotFound'



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const handleLogIn = () => {
    setIsLoggedIn(true);
  }
  const handleLogOut = () => {
    setIsLoggedIn(false);
  }
  return (
    <BrowserRouter>
      <div className='backdrop'>
        <div className='form-2-container'>
          <Routes>
            <Route path='/signin' element={<SignInForm />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App