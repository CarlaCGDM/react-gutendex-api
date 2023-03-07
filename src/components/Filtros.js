import React, {useState} from 'react'
import '../stylesheets/Filtros.css'
import Searchbar from './input/Searchbar'
import TextInput from './input/TextInput'
import NumberInput from './input/NumberInput'
import Select from './input/Select'
import { paginaListado } from '../scripts/peticiones'
import { validarAnyo } from '../scripts/validaciones'

/**
*   @description Esta es la zona donde el usuario podrá especificar los distintos filtros de
*   búsqueda que quiere aplicar. Los filtros pueden proceder de la barra de búsqueda,
*   los menús desplegables o los campos de input de tipo texto. Todos estos valores
*   se sumarán como parámetros para generar la URL final con la petición a la API.
*   @name Filtros
*   @param {function} setResultadosBusqueda Función setter que asignará el valor de los resultados obtenidos en la llamada a la API
*   al campo correspondiente en el componente padre Inicio.
*   @function
*/

const Filtros = ({setResultadosBusqueda}) => {

  /* Obtener los datos de los componentes hijos */

  const [busqueda, setBusqueda] = useState("");
  const busquedaHandler = (busqueda) => { setBusqueda("search=" + busqueda.split(" ").join("%20")); }

  const [desde, setDesde] = useState("");
  const desdeHandler = (desde) => { setDesde("author_year_start=" + desde); }

  const [hasta, setHasta] = useState("");
  const hastaHandler = (hasta) => { setHasta("author_year_end=" + hasta); }

  const [tema, setTema] = useState("");
  const temaHandler = (tema) => { setTema("topic=" + tema); }

  const [idiomas, setIdiomas] = useState("");
  const idiomasHandler = (idiomas) => { setIdiomas("languages=" + idiomas.join(",")); }
  
  const idiomasDisponibles = {
    Chinese: "zh",
    Danish: "da",
    Dutch: "nl",
    English: "en",
    Esperanto: "eo",
    Finnish: "fi",
    French: "fr",
    German: "de",
    Greek: "el",
    Hungarian: "hu",
    Italian: "it",
    Latin: "la",
    Portuguese: "pt",
    Spanish: "es",
    Swedish: "sv",
    Tagalog: "tl",
  }

  const errores = {
    "anyo":"El año debe ser un número entero.",
  }

  const [errorDesde, setErrorDesde] = useState("");
  const [errorHasta, setErrorHasta] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    /* Generar URL sumando todos los parámetros */

    let miURL = "https://gutendex.com/books?";

    let filtros = [
      busqueda,
      desde,
      hasta,
      tema,
      idiomas
    ].join("&");

    miURL += filtros;

    /* Realizar petición a la API sólo si los valores introducidos en la búsqueda son válidos*/

    const desdeValido = validarAnyo(desde);
    const hastaValido = validarAnyo(hasta);

    desdeValido ? setErrorDesde("") : setErrorDesde(errores.anyo);
    hastaValido ? setErrorHasta("") : setErrorHasta(errores.anyo);

    if (desdeValido && hastaValido) {

      paginaListado(miURL).then(json => {
        setResultadosBusqueda(json);
      });

    }
  }

return (
  <form className="filtros__busqueda" onSubmit={handleSubmit}>
    <Searchbar onSearch={busquedaHandler}/>
    <fieldset>
      <legend>Filtros de búsqueda:</legend>
      <div className="filtros__texto">
        <NumberInput onText={desdeHandler} label="Libros a partir del año..." error={errorDesde}/>
        <NumberInput onText={hastaHandler} label="Libros hasta el año..." error={errorHasta}/>
        <TextInput onText={temaHandler} label="Temática"/>
      </div>
      <div className="filtros__texto">
        <Select onSelect={idiomasHandler} label="Idiomas" opciones={idiomasDisponibles}/>
      </div>
    </fieldset>
    <button className="submit__button"><span>Buscar</span></button>
  </form>
)

}

export default Filtros
