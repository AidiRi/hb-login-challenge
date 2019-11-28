import React, { Component } from 'react';
import FormErrors from './formErrors'
//props = FormData, handleForm(), handleSubmit(), errors, validate()

class Form extends Component {

  render (){
    return (
      <div className="card-body">

        <form onSubmit={event=>{this.props.handleSubmit(event)}} >
          <div className="form-group">
            <input
            // HTML5 will validate email in most browsers with type='email'
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={this.props.FormData.email}
              required
              onChange={event => this.props.handleForm(event)}
              // Don't need if using HTML5 email validation
              // onBlur={()=>{this.props.validate(this.props.FormData.email, null)}}
            />
            <FormErrors Error={this.props.FormData.errors.email}/>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
              onChange={event => this.props.handleForm(event)}
              value={this.props.FormData.password}
              // When clicking out of input field, will validate before clicking submit
              onBlur={()=>{this.props.validate(null, this.props.FormData.password)}}
            />
            <FormErrors Error={this.props.FormData.errors.password}/>

          </div>


          <button
            type="submit"
            className="btn btn-danger"
          >
            Login
            </button>


        </form>
      </div>
    )
  }
}

export default Form;
