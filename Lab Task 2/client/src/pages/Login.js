import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom'

const Login = () => {

  const [credentials , setCredentials] = useState({email: "" , password: ""});
  const [notification, setNotification] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/login`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email , password: credentials.password})
      });
      const json = await response.json();
      if(json.token != undefined){
        localStorage.setItem('token' , json.token);
      }
      setNotification(true)
      console.log(json);
}

  const handleChange = (e)=>{
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

  return (
    <>
      <div id="header" class="blogheader"></div>
      <div className='mainSignup'>
        <form className="signupMain">
          <h1>Login</h1>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" value={credentials.email} onChange={handleChange} required/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={credentials.password}onChange={handleChange} required/>
          </div>
          <div className="signupBtn">
            <div className="btn" onClick={handleSubmit}>Login</div>
          </div>
        <p>Don't have an account <span><Link to="/signup" className='liginLink'>Register</Link></span></p>
        </form>
      </div>
    </>
  )
}

export default Login
