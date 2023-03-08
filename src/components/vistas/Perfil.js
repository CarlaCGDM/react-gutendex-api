import React, {useEffect, useState} from 'react'
import { paginaFavoritos } from '../../scripts/peticiones'
import Header from '../navegacion/Header'
import Navbar from '../navegacion/Navbar'
import Footer from '../navegacion/Footer'
import LibrosGrid from '../LibrosGrid'
import InfoUsuario from '../InfoUsuario'
import '../../stylesheets/vistas/Perfil.css';

/**
*   @description Página de perfil de la página web. El usuario puede ver la información que introdujo en el registro
*   y los libros que ha marcado como favoritos. Los favoritos se almacenan en el almacenamiento local (localStorage).
*   @name Perfil
*   @function
*/

const Perfil = () => {

    /*Una cuarta parte de la pagina es los datos del usuario (imagen, nombre de usuario, etc.) */
    /*El resto es la grid de favoritos*/

    /* Extraemos los favoritos del localstorage */

    let favoritos = localStorage.getItem("Favoritos").split(",").filter((id) => id != "").map(Number);
    console.log(favoritos);

    /* Realizamos la petición a la API */

    const [listadoFavoritos, setListadoFavoritos] = useState([]);

    useEffect(() => {
        if (favoritos != "") {
            paginaFavoritos(favoritos).then(json => {
            setListadoFavoritos(json);
    });
}
    }, []);

  return (
    <>
    <Header />
    <main className="main__profile">
        <header className='section__header'>
            <h2>Perfil de usuario</h2>
            <p>Consulta tu información personal y tus libros agregados a favoritos.</p>
        </header>
        <div className="profile__sections">
        <InfoUsuario 
            nombre="testUser"
            email="test@ejemplo.com"
            fecha="01/01/1999"/>
        <LibrosGrid 
        resultadosBusqueda={listadoFavoritos.results}
        numeroResultados={listadoFavoritos.count}/>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default Perfil
