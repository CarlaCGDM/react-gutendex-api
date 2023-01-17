import React from 'react'
import '../../stylesheets/input/Input.css'

/**
*   @description El componente permite introducir un input del tipo password y mostrar un mensaje de error.
*   @name PasswordInput
*   @function
*   @param {string} props.value Valor predefinido que puede o no tener el input.
*   @param {string} props.label Etiqueta para el input.
*   @param {string} props.error Mensaje de error que mostrará el input.
*/

const PasswordInput = (props) => {

  /* Pasamos el valor del input al componente padre */

  const textChangeHandler = (e) => {
    props.onText(e.target.value);
  }

return (
  <div className="input__field">
    <label>{props.label}</label>
    <input
    type="password"
    onChange={textChangeHandler} 
    value={props.value}/>

    {props.error && ( <p className="input__error"> { props.error } </p> )}
    
  </div>
  
)

}

export default PasswordInput
