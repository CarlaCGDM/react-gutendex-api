import React, {useEffect, useState} from 'react'
import { paginaListado } from '../../scripts/peticiones'
import Header from '../navegacion/Header';
import Navbar from '../navegacion/Navbar';
import Saludo from '../Consejo';
import Footer from '../navegacion/Footer';
import Filtros from '../Filtros';
import LibrosGrid from '../LibrosGrid';
import Paginador from '../Paginador';

/**
*   @description Página principal de la aplicación. Este componente contiene el listado completo y paginado de los libros 
*   que ofrece el proyecto Gutenberg. La información se obtiene desde la API mediante la llamada a la función 'paginaListado()' 
*   y puede filtrarse mediante seis parámetros distintos de búsqueda.
*   @name Inicio
*   @function
*/

const Inicio = () => {

  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  /* 
  *   Si no existen favoritos, añadimos unos cuantos favoritos iniciales en el localstorage. 
  */

  const favoritosIniciales = ["2641","30658","46423"];

  if (localStorage.getItem("Favoritos") == null) {
      localStorage.setItem("Favoritos",favoritosIniciales.join(","));
  }

  /*
  *   Estado inicial de los resultados de búsqueda (sin filtros). 
  */

  useEffect(() => {
    paginaListado().then(json => {
      setResultadosBusqueda(json);
    });
  }, []);

  /*
  *   Mostramos la barra de búsqueda, los filtros y los resultados 
  *   (que podrán variar en función de los filtros). 
  */

  return (
    <>
      
      <Header />
      <Navbar />
      <Saludo />

      <Filtros 
        setResultadosBusqueda={setResultadosBusqueda} />

      <LibrosGrid 
        resultadosBusqueda={resultadosBusqueda.results}
        numeroResultados={resultadosBusqueda.count}/>

      <Paginador 
        resultadosBusqueda={resultadosBusqueda}
        setResultadosBusqueda={setResultadosBusqueda}/>

      <Footer />
    </>
  )
}

export default Inicio
