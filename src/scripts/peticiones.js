import axios from 'axios';

/**
*   @file Peticiones a la API Gutendex mediante la librería Axios.
*   @author Nadina Carla Cardillo Garreta
*   @see <a href="gutendex.com">Gutendex API</a>
*   @module Peticiones
*/

/**
*   Devuelve el listado de libros correspondiente a una búsqueda y página concretas,
*   o el catálogo completo si no se ha especificado ningún parámetro de búsqueda.
*
*   @param {string} miURL - URL con los parámetros de la petición.
*   @returns {object}
*/

const paginaListado = async (miURL) => {

    let peticion;
    if (miURL) {
        peticion = await axios.get(miURL);
        return peticion.data;
    } else {
        peticion = await axios.get("https://gutendex.com/books");
        return peticion.data;
    }
}

/**
*   Devuelve el listado de todos los libros que el usuario ha guardado como favoritos.
*
*   @param {string} favoritos - Listado separado por comas de las id de los libros favoritos del usuario.
*   @returns {object}
*/

const paginaFavoritos = async (favoritos) => {

    const peticion = await axios.get(`https://gutendex.com/books?ids=${favoritos}`);
    return peticion.data;

}

/**
*   Devuelve la información referente a un único libro a partir de su id.
*
*   @param {string} id - Id del libro a consultar.
*   @param {function} state - Función setter que actualizará el estado del componente con la información del libro.
*   @returns {object}
*/

const unicoLibro = async (id, state) => {

    const peticion = await axios.get(`https://gutendex.com/books/${id}`);
    state(peticion.data);
    console.log(peticion.data);
}

export {
    paginaListado,
    paginaFavoritos,
    unicoLibro
}