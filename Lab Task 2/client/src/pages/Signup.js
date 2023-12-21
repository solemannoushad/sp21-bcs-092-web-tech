import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div id="header" class="blogheader"></div>
      <div className='mainSignup'>
        <form className="signupMain">
          <h1>Sign Up</h1>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" required/>
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" required/>
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" required/>
          </div>
          <div className="field">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" required/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required/>
          </div>
          <div className="field">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" name="cpassword" id="cpassword" required/>
          </div>
          <div className="signupBtn">
            <input type="submit" className='btn' value="Register" />
          </div>
        <p>Already have an account? <span><Link to="/login" className='liginLink'>Login</Link></span></p>
        </form>
      </div>
    </>
  )
}

export default Signup
