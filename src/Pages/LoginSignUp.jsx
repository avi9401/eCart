import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Enter Your Name' />
          <input type='email' placeholder='Enter Your Email' />
          <input type='password' placeholder='Enter Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Aready have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to terms & conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp