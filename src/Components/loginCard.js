import React, { Component } from 'react';
import LoginFooter from './loginFooter'
import Form from './form'


class LoginCard extends Component {

  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {
        email: null,
        password: null,
      }
    }
  }

  render(){
    return(

      <div className="card text-center row col-lg-5 col-md-10 ">
        <div className="card-header">
          <img alt="HomeBinder Logo" src="https://www.homebinder.com/img/flatlogo.png"/>
        </div>
        <Form
          FormData={this.state}
          handleForm={this.handleForm}
          handleSubmit={this.handleSubmit}
          validate={this.validate}
        />
        <LoginFooter/>
      </div>
    )
  }

// Will update state with event values when onChange is triggered as user types
  handleForm = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

// validates email and password on submit, if valid = true, will redirect
  handleSubmit = (event) => {
    event.preventDefault()

    const { email, password } = this.state;

    return this.validate(email, password) ?  this.redirect() : null;
  }

// Resets valid = true and errors to null, if password/email are not valid, will set valid = false and set error messages.
  validate = (email, password) => {
    let valid = true;
    this.setState({
      ...this.state,
      errors:{
        email: null,
        password: null,
      }
    })
    //Don't need this with html5 type=email
    /*
    let emailError = "Not a valid email";
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email && !email.match(emailPattern)){
      this.setState({
        this.state.errors.email: emailError
      })
      valid = false;
    }
    */

    let passwordError = "Too short";

    if (password && password.length < 8){
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          password: passwordError
        }
      })
      valid = false;
    }

    return valid;
  }

  // If email/password are valid, will alert and redirect to home page
  redirect = () => {
    alert("Submitted!");

    return window.location = 'https://www.homebinder.com/';
  }

}

export default LoginCard;
