import React from 'react'
import '../../stylesheets/navegacion/Navbar.css';
import { Link } from 'react-router-dom';

/**
*   @description Muestra la barra de navegación de la página web.
*   @name Navbar
*   @function
*/

const Navbar = () => {
  return (
    <navbar className="main__navbar">
    <Link to={`/`}>Inicio</Link>
      <Link to={`/perfil`}>Perfil</Link>
      <Link to={`/login`}>Login</Link>
      <Link to={`/registro`}>Registro</Link>
      <Link to={`/contacto`}>Contacto</Link>
    </navbar>
  )
}

export default Navbar
