import '../stylesheets/Consejo.css'
import React, { useState, useEffect } from 'react'

/**
*   @description Mensaje que se le muestra al usuario con consejos sobre cómo sacar más provecho a la aplicación. El 
*   consejo que se muestra va cambiando cada unos pocos segundos mediante un evento de intervalo de tiempo.
*   @name Consejo
*   @function
*/

const Consejo = () => {

    const consejos = [
        "¿Sabías que puedes ver todos tus libros favoritos en tu perfil?",
        "¡Gracias al proyecto Gutenberg, puedes leer online o descargar miles de libros de manera gratuita!",
        "Mediante los filtros de búsqueda, puedes descubrir miles de libros nuevos.",
        "Si tienes ideas para mejorar la página, puedes enviárnoslas a través de nuestra página de contacto."
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const siguiente = () => setIndex(i => i + 1);

      const id = setInterval(siguiente, 4500);
      return () => clearInterval(id);
    }, []);

    const cambiarFondoNegro = (e) => {
      e.target.style.background = 'black';
    }


  return (
    <div className='consejo__dinamico' onMouseOver={cambiarFondoNegro} >
      <p>{consejos[index % consejos.length]}</p>
    </div>
  )
}

export default Consejo
