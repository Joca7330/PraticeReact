import React from 'react'


const App = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1>Sign In</h1>
        <p>Enter your details to continue</p>
        <form action="form">
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="Email"
              id='Email'
              placeholder='john@email.com'
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="Password"
              id='Password'
            />
            <div>
              <h3>Forgot Password</h3>
            </div>
            <div>
              <a href="">Forgot Password</a>
            </div>
            <button
              type='submmit'
              className='sign-in'>Sign In </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App