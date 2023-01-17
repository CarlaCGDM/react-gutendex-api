import React, {useState} from 'react'
import '../stylesheets/Libro.css'
import BotonFavorito from './input/BotonFavorito'

/**
*   @description El componente libro muestra la información básica de cada libro (portada, título y autor) así como un enlace hacia
*   la vista detallada con toda la información del libro y un botón que permite añadir el libro a tus favoritos o eliminarlo.
*   @name Libro
*   @param {object} libro Contiene toda la información referente a un único libro.
*   @function
*/

const Libro = ({libro}) => {

  const [mensaje, setMensaje] = useState(false);
  const dragHandler = (e) => {
    setMensaje(!mensaje);
    setTimeout(function() {
      e.target.style.visibility = mensaje ? "visible" : "hidden";
    }, 1);
  }

  return (
    <article className="libro">

        <div className="portada__libro">

          <img 
          draggable 
          onDragStart={dragHandler} 
          onDragEnd={dragHandler} 
          src={libro.formats["image/jpeg"]}>

          </img>

          {mensaje && ( <p>¡Ey, devuelve eso a su sitio!</p> )}

        </div>

        <a href={`/libros/${libro.id}`}>{libro.title}</a>
        <small>{libro.authors[0]?.name}</small>

        

    </article>
  )
}

export default Libro
