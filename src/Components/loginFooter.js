import React from 'react'

const LoginFooter = () => {

  return (
    <div className="card-footer">
      <p id="help-links">
        <a href="https://www.homebinder.com/passwords/reset" className="orange-text">Forgot my password</a> | <a href="https://www.homebinder.com/homeowners/register" className="orange-text">Sign Up</a>
      </p>
      <p id="copyright">
      © 2019 HomeBinder
      </p>
    </div>
  )

}

export default LoginFooter;
