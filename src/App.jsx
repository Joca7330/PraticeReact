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
            />
            <Route
              path="/signin"
              element={<SignInForm />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
