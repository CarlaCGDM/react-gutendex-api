import React, {useState} from 'react';
import '../../stylesheets/navegacion/Header.css';
import Logo from '../../images/logo.svg';
import Avatar from '../../images/avatarUsuario.png'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

/**
*   @description Muestra el header de la página web.
*   @name Header
*   @function
*/

const Header = () => {

  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const showNavbar = (e) => {
    setTimeout(function() {
      setVisibleNavbar(!visibleNavbar);
    }, 1);
  }


  return (
    <>
    <header className='main__header'>
      <div className="logo__area">
        <Link to={`/`}><img src={Logo} alt="Logo de Gutendex"/></Link>
        <div>
          <h1>Gutendex API</h1>
          <small>Powered by <i><a href="https://gutendex.com/" alt="gutendex.com">Gutendex</a></i></small>
        </div>
      </div>
      <div className="picture__area">
        <small>@__testUser</small>
        <img src={Avatar} alt="Avatar de usuario" onClick={showNavbar}/>
      </div>
    </header>
    {visibleNavbar && ( <Navbar/> )}
  </>
  )
}

export default Header
