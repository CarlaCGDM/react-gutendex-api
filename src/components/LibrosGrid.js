import React from 'react'
import '../stylesheets/LibrosGrid.css'
import Libro from './Libro'

/**
*   @description Este componente devuelve un grid con funcionalidad de scroll que muestra
*   los libros encontrados en una búsqueda de manera paginada. De cada libro
*   se muestra la portada, el título y el autor, y hacer clic en uno de ellos
*   muestra la información completa del mismo (componente LibroDetalle).
*   @name Librosgrid
*   @param {object} resultadosBusqueda Set de 32 libros (una página de resultados) con toda su información.
*   @param {int} numeroResultados Número de resultados totales que se obtuvieron en la búsqueda.
*   @function
*/

const LibrosGrid = ({ resultadosBusqueda, numeroResultados }) => {

    const resultados = resultadosBusqueda?.map(libro => <Libro key={libro.id} libro={libro} />);
    const contenido = resultados?.length ? resultados : <article><p>No se encontraron resultados.</p></article>
  
  return (
    <section className="grid__libros">
      <header><small>Se encontraron {numeroResultados} resultados para tu búsqueda.</small></header>
      <main>{contenido}</main>
    </section>
  )
}

export default LibrosGrid
