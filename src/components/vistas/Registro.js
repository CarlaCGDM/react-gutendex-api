import React, {useState} from 'react';
import { validarEmail, validarPassword, validarPasswordRepetido, validarFechaNacimiento, validarNick } from '../../scripts/validaciones';
import Header from '../navegacion/Header';
import Navbar from '../navegacion/Navbar';
import Footer from '../navegacion/Footer';
import TextInput from '../input/TextInput';
import PasswordInput from '../input/PasswordInput';
import DateInput from '../input/DateInput';
import { Link } from 'react-router-dom';

/**
*   @description Página de registro de la página web. El usuario puede registrarse con un nombre de usuario, un correo
*   electrónico, una contraseña y una fecha de nacimiento válidos. Todos los campos se validan desde el front.
*   @name Registro
*   @function
*/

const Registro = () => {

    /* Controladores de los distintos campos */

    const [nick, setNick] = useState("");
    const nickHandler = (nick) => { setNick(nick); }

    const [email, setEmail] = useState("");
    const emailHandler = (email) => { setEmail(email); }

    const [password, setPassword] = useState("");
    const passwordHandler = (password) => { setPassword(password); }

    const [passwordRepetido, setPasswordRepetido] = useState("");
    const passwordRepetidoHandler = (passwordRepetido) => { setPasswordRepetido(passwordRepetido); }

    const [fecha, setfecha] = useState("");
    const fechaHandler = (fecha) => { setfecha(fecha) }

    console.log(fecha);

    /* Controladores de los mensajes de error/éxito */

    const errores = {
        "nick":"El nombre de usuario debe contener entre 1 y 30 caracteres, y no puede incluir caracteres especiales",
        "email":"El correo electrónico no es válido.",
        "password":"La contraseña debe contener entre 8 y 16 caracteres alfanuméricos y al menos un caracter especial.",
        "passwordRepetido":"Ambas contraseñas deben coincidir.",
        "fecha":"Debes ser mayor de 16 años para registrarte en la aplicación.",
        "exito":"¡Registro exitoso!"
    }

    const [exitoSubmit, setExitoSubmit] = useState("");
    const [errorNick, setErrorNick] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorFecha, setErrorFecha] = useState("");
    const [errorPasswordRepetido, setErrorPasswordRepetido] = useState("");

    /* Controlador del submit del formulario */

    const handleSubmit = (e) => {

        e.preventDefault();

        setExitoSubmit("");

        /* Validar los datos introducidos y mostrar mensajes de error/éxito. */

        const nickValido = validarNick(nick);
        const emailValido = validarEmail(email);
        const passwordValido = validarPassword(password,email);
        const passwordRepetidoValido = validarPasswordRepetido(passwordRepetido,password);
        const fechaValido = validarFechaNacimiento(fecha);

        nickValido ? setErrorNick("") : setErrorNick(errores.nick);
        emailValido ? setErrorEmail("") : setErrorEmail(errores.email);
        passwordValido ? setErrorPassword("") : setErrorPassword(errores.password);
        passwordRepetidoValido ? setErrorPasswordRepetido("") : setErrorPasswordRepetido(errores.passwordRepetido);
        fechaValido ? setErrorFecha("") : setErrorFecha(errores.fecha);

        if (nickValido && emailValido && passwordValido && passwordRepetidoValido && fechaValido) {

            /* Borrar campos y mostrar mensaje de éxito */

            setNick("");
            setEmail("");
            setPassword("");
            setPasswordRepetido("");
            setfecha("");
            setExitoSubmit(errores.exito);
        }
    
      }

  return (
    <>
    <Header />
    <main className="form__main">
        <header className="section__header">
            <h2>Registro</h2>
            <p>¿Ya tienes cuenta? <Link to={`/login`}>Inicia sesión</Link>.</p>
        </header>
        <form className="basic__form" onSubmit={handleSubmit}>

            <TextInput onText={nickHandler} label="Nombre de usuario:" error={errorNick} value={nick} />
            <TextInput onText={emailHandler} label="Correo electrónico:" error={errorEmail} value={email} />
            <PasswordInput onText={passwordHandler} label="Contraseña:" error={errorPassword} value={password} />
            <PasswordInput onText={passwordRepetidoHandler} label="Repetir contraseña:" error={errorPasswordRepetido} value={passwordRepetido} />
            <DateInput onDate={fechaHandler} label="Fecha de nacimiento:" error={errorFecha} value={fecha} />

            <button className="submit__button">Enviar</button>
            {exitoSubmit && ( <p className="exito"> { exitoSubmit } </p> )}

        </form>
    </main>
    <Footer />
    </>
  )
}

export default Registro
