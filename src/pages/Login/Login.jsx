import React from 'react'
import './Login.css';
import logo from '../../assets/logo.png';
import { Form } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <img src={logo} className='login-logo' alt="" /> 
      <div className="logo-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="your name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button>Sign up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
            

          </div>
        </form>

      </div>
    </div>
  )
}

export default Login