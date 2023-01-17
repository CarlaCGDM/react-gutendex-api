import React from 'react'

/**
*   @description El componente permite introducir un input del tipo numérico y mostrar un mensaje de error.
*   @name NumberInput
*   @function
*   @param {string} props.value Valor predefinido que puede o no tener el input.
*   @param {string} props.label Etiqueta para el input.
*   @param {string} props.error Mensaje de error que mostrará el input.
*/

const NumberInput = (props) => {

  const textChangeHandler = (e) => {
    props.onText(e.target.value);
  }

  return (
    <div className="input__field">
      <label>{props.label}</label>
      <input 
      type="number"
      onChange={textChangeHandler} 
      value={props.value}/>

      {props.error && ( <p className="input__error"> { props.error } </p> )}
      
    </div>
    
  )
}

export default NumberInput
