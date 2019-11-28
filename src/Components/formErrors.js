import React from 'react';

// props = Error,

const FormErrors = (props) => {

// Checks, if error is not null (contains an error message string), then return the error message
  const displayErrors = (error) =>{
    return error ? <p className="error-message">{error}</p> : null;
  }

  return(

    displayErrors(props.Error)

  )
}

export default FormErrors;
