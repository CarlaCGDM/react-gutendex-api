import React from 'react';
import '../stylesheets/Paginador.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { paginaListado } from '../scripts/peticiones';

/**
*   @description Este componente permite al usuario desplazarse entre las distintas páginas de los resultados de su
*   búsqueda. Cada página contiene 32 resultados.
*   @name Paginador
*   @param {object} resultadosBusqueda Set de 32 libros (una página de resultados) con toda su información, incluyendo
*   la página anterior y la página siguiente.
*   @param {function} setResultadosBusqueda Función setter que actualiza el valor de los resultados a mostrar en el
*   componente padre según el usuario indique que quiere ir a la página anterior o la siguiente (si existen).
*   @function
*/

const Paginador = ({resultadosBusqueda, setResultadosBusqueda}) => {

    const handleScrollTotTop = () => {
        const element = document.getElementById('grid__libros');
        element.scrollTo({top: 0, behavior: 'smooth'});
    }

    /*
    *   El método onClick de cada botón cambiará los resultados que ve el usuario
    *   (página anterior o página siguiente).
    */

    const saltarPaginaAnterior = () => {
        paginaListado(resultadosBusqueda.previous).then(json => {
            setResultadosBusqueda(json);
            handleScrollTotTop();
        });
    }

    const saltarPaginaSiguiente = () => {
        paginaListado(resultadosBusqueda.next).then(json => {
            setResultadosBusqueda(json);
            handleScrollTotTop();
        });
    }

    /* 
    *   Como la API no nos devuelve directamente el número de la página en la que estamos
    *   actualmente, tenemos que sacarlo nosotros de la información que sí tenemos.
    */

    const total = Math.ceil(resultadosBusqueda.count / 32);
    let siguiente = resultadosBusqueda.next;
    siguiente = siguiente?.split("page=")[1].split("&")[0];

    /*
    *   Usando un condicional dentro de nuestra expresión de return podemos mostrar el 
    *   botón de anterior y el botón de siguiente sólo cuando las páginas correspondientes 
    *   existan.
    */

  return (
    <div className='paginador__resultados'>
    
        {resultadosBusqueda.previous ? (
        <button className="boton__paginador" onClick={saltarPaginaAnterior}><FontAwesomeIcon icon={faLongArrowAltLeft} /></button>
        ) : "" }
      
        <p>Página {siguiente ? siguiente - 1 : total} de {total}</p>
        
        {resultadosBusqueda.next ? (
        <button className="boton__paginador" onClick={saltarPaginaSiguiente}><FontAwesomeIcon icon={faLongArrowAltRight} /></button>
        ) : "" }

    </div>
  )
}

export default Paginador
