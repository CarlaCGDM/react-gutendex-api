import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../stylesheets/input/Searchbar.css'

/**
*   @description El componente permite introducir un input del tipo string y mostrar un mensaje de error.
*   @name Searchbar
*   @function
*   @param {string} props.value Valor predefinido que puede o no tener el input.
*   @param {string} props.error Mensaje de error que mostrará el input.
*/

const Searchbar = (props) => {

    /* Pasamos el valor del input al componente padre */

    const searchChangeHandler = (e) => {
      props.onSearch(e.target.value);
    }

  return (
    <div className="searchbar">
      <FontAwesomeIcon className="searchbar__icon" icon={faMagnifyingGlass} />
      <input 
          className="searchbar__input"
          type="search"
          onChange={searchChangeHandler} />
    </div>
  )
}

export default Searchbar
