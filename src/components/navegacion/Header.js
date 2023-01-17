import React from 'react'
import '../../stylesheets/navegacion/Header.css';
import Logo from '../../images/logo.svg';

/**
*   @description Muestra el header de la página web.
*   @name Header
*   @function
*/

const Header = () => {
  return (
    <header className='main__header'>
        <img src={Logo} alt="Logo de Gutendex"/>
        <div>
          <h1>Gutendex API</h1>
          <p>¡Miles de libros pertenecientes al dominio público a tu alcance!</p>
        </div>
    </header>
  )
}

export default Header
