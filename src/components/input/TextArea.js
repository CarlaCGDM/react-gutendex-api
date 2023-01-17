import React from 'react'
import '../../stylesheets/input/Input.css'

/**
*   @description El componente permite introducir un texto largo y puede mostrar o no un mensaje de
*   error.
*   @name TextArea
*   @function
*   @param {string} props.label Valor de la etiqueta que acompaña al input.
*   @param {string} props.value Valor predefinido que puede o no tener el input.
*   @param {string} props.error Mensaje de error que mostrará el input.
*/


const TextArea = (props) => {
  /* Pasamos el valor del input al componente padre */

    const textChangeHandler = (e) => {
        props.onText(e.target.value);
    }

    return (
    <div className="input__field">
        <label>{props.label}</label>
        <textarea
        rows="10"
        onChange={textChangeHandler}
        value={props.value} />

        {props.error && ( <p className="input__error"> { props.error } </p> )}
        
    </div>
    
    )
}

export default TextArea
