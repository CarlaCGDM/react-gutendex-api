import React from 'react'
import '../stylesheets/Tema.css'

/**
*   @description El componente muestra un tema o "etiqueta" que puede tener un libro. Mediante estos temas el
*   usuario puede encontrar libros similares a uno que le haya gustado.
*   @name Tema
*   @param {string} props.tema Tema.
*   @function
*/

const Tema = (props) => {

    /* 
    *   Al hacer clic en este componente, el usuario verá una búsqueda de todos los libros
    *   que traten de este mismo tema.
    */

  return (
    <div className="enlace__tema">
      <p>{props.tema}</p>
    </div>
  )
}

export default Tema
