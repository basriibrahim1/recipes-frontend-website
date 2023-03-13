import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordComponent = () => {
  return (
    <section>
      <div className="login-container container">
        <div className="d-flex flex-column vh-100 align-items-center">
          <h3 className="text-center text-warning mt-5">Recipes...</h3>
          <h5 className="mb-2 mt-5 text-warning fs-2">Forgot Password</h5>
          <h5 className="mt-5 text-secondary border-bottom pb-5 w-50 text-center">Send OTP to your email!</h5>
          <div className="input-email w-50 mt-5">
            <label for="email" className="form-label">Email</label>
            <input className="form-control" id="email" name="email" type="text" placeholder="Enter email address" />
          </div>
          <Link to="/login" className='text-warning text-decoration-none w-50 text-center'><button type="submit" className="button bg-warning text-white w-100 border-0 p-3 mt-4 rounded">Send OTP</button></Link>
          <div className="justify-content-start align-items-start text-start d-flex w-50">
            <p className="mt-2">Login Instead? <Link to="/login" className='text-warning text-decoration-none'>Click Here</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPasswordComponent