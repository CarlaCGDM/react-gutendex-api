import React, {useState} from 'react'
import { validarEmailExistente, validarPasswordExistente} from '../../scripts/validaciones'
import Header from '../navegacion/Header';
import Footer from '../navegacion/Footer';
import TextInput from '../input/TextInput';
import PasswordInput from '../input/PasswordInput';
import { Link } from 'react-router-dom';

/**
*   @description Página de login de la página web. El usuario puede logearse mediante
*   el correo electrónico y la contraseña que usó en el registro. Todos los campos se validan desde el front.
*   @name Login
*   @function
*/

const Login = () => {

    /* Controladores de los distintos campos */

    const [email, setEmail] = useState("");
    const emailHandler = (email) => { setEmail(email); }

    const [password, setPassword] = useState("");
    const passwordHandler = (password) => { setPassword(password); }

    /* Controladores de los mensajes de error/éxito */

    const errores = {
        "email":"No existe ninguna cuenta para ese correo electrónico.",
        "password":"Esa no es la contraseña que corresponde a esa cuenta de correo electrónico.",
        "exito":"¡Login exitoso!"
    }

    const [exitoSubmit, setExitoSubmit] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    /* Controlador del submit del formulario */

    const handleSubmit = (e) => {

        e.preventDefault();

        setExitoSubmit("");

        /* Validar los datos introducidos y mostrar mensajes de error/éxito. */

        const emailValido = validarEmailExistente(email);
        const passwordValido = validarPasswordExistente(password,email);

        emailValido ? setErrorEmail("") : setErrorEmail(errores.email);
        passwordValido ? setErrorPassword("") : setErrorPassword(errores.password);

        if (emailValido && passwordValido) {

            /* Borrar campos y mostrar mensaje de éxito */

            setEmail("");
            setPassword("");
            setExitoSubmit(errores.exito);
        }
    
      }

  return (
    <>
    <Header />
    <main className="form__main">
        <header className="section__header">
            <h2>Login</h2>
            <p>¿No tienes cuenta? <Link to={`/registro`}>Regístrate</Link>.</p>
        </header>
        <form className="basic__form" onSubmit={handleSubmit}>

            <TextInput onText={emailHandler} label="Correo electrónico:" error={errorEmail} value={email}/>
            <PasswordInput onText={passwordHandler} label="Contraseña:" error={errorPassword} value={password}/>

            <button className="submit__button">Enviar</button>
            {exitoSubmit && ( <p className="exito"> { exitoSubmit } </p> )}

        </form>
    </main>
    <Footer />
    </>
    
  )
}

export default Login