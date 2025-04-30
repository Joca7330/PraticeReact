
import {React,useState} from 'react'
import SignInForm from './forms/SignInForm'
import SignUpForm from './forms/SignUpForm'
import DetailsToggle from './conditional-rendering/AuthForms'
import ToggleLogin from './conditional-rendering/ToggleLogin'
import OneToggleLogin from './conditional-rendering/OneToggleLogin'
import Child from './props/Child'




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log('state:', isLoggedIn);
  
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
        <SignInForm onLogin={handleLogIn} />
        </div>
         : <SignUpForm onLogout={handleLogOut} />}
      </div>
    </div>
  )
}

export default App