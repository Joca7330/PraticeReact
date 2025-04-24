
import React from 'react'
import SignInForm from './Components/SignInForm'
import SignUpForm from './Components/SignUpForm'



const App = () => {
  return (
    <div className='backdrop'>
      <div className='form-2-container'>
        {/* <SignInForm /> */}
        <SignUpForm />
      </div>
    </div>
  )
}

export default App