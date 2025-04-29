
import React from 'react'
import SignInForm from './forms/SignInForm'
import SignUpForm from './forms/SignUpForm'
import DetailsToggle from './conditional-rendering/AuthForms'
import ToggleLogin from './conditional-rendering/ToggleLogin'
import OneToggleLogin from './conditional-rendering/OneToggleLogin'

const App = () => {
  return (
    <div className='backdrop'>
      <div className='form-2-container'>
        {/* <SignInForm /> */}
        {/* <SignUpForm /> */}
        {/* <DetailsToggle /> */}
        {/* <ToggleLogin /> */}
        <OneToggleLogin />
      </div>
    </div>
  )
}

export default App