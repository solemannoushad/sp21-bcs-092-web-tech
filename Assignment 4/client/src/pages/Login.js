import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div id="header" class="blogheader"></div>
      <div className='mainSignup'>
        <form className="signupMain">
          <h1>Login</h1>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" required/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required/>
          </div>
          <div className="signupBtn">
            <input type="submit" className='btn' value="Login" />
          </div>
        <p>Don't have an account <span><Link to="/signup" className='liginLink'>Register</Link></span></p>
        </form>
      </div>
    </>
  )
}

export default Login
