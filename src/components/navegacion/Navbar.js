import React from 'react';
import '../../stylesheets/navegacion/Navbar.css';
import { Link } from 'react-router-dom';
import Avatar from '../../images/avatarUsuario.png';

/**
*   @description Muestra la barra de navegación de la página web.
*   @name Navbar
*   @function
*/

const Navbar = () => {
  return (
    <navbar className="main__navbar">
      <div className="top__section">
        <img src={Avatar} alt="Avatar de usuario"/>
        <Link to={`/perfil`}>@testUser</Link>
        <Link to={`/login`}><button>Login</button></Link>
        <Link to={`/registro`}><button>Registro</button></Link>
      </div>
      <Link to={`/contacto`}>Contacto</Link>
    </navbar>
  )
}

export default Navbar
