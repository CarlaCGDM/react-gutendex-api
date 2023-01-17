import React from 'react'

/**
*   @description El componente permite seleccionar múltiples campos de un dropdown select que se genera a
*   partir de un diccionario de clave-valor que se recibe.
*   @name Select
*   @function
*   @param {object} props.opciones Lista de opciones clave-valor que mostrará el menú dropdown.
*   @param {string} props.label Etiqueta para el input de tipo select.
*/


const Select = (props) => {

  /* Pasamos el valor del input al componente padre */

  const selectChangeHandler = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    props.onSelect(value);
  }

  /* Generamos lista de opciones */

  let opciones = [];
  for (const [key,value] of Object.entries(props.opciones)) {
    opciones.push(<option key={key} value={value}>{key}</option>)
  }

  return (
    <div>
      <label>{props.label}</label>
      <select onChange={selectChangeHandler} multiple >
        {opciones}
      </select>
    </div>
  )
}

export default Select
