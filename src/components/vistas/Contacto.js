import React, {useState} from 'react'
import { validarEmail, validarAsunto, validarMensaje } from '../../scripts/validaciones'
import Header from '../navegacion/Header';
import Navbar from '../navegacion/Navbar';
import Footer from '../navegacion/Footer';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';

/**
*   @description Página de contacto de la página web. El usuario puede enviar
*   un mensaje si proporciona una dirección de correo electrónico válida y especifica un asunto.
*   Todos los campos se validan desde el front.
*   @name Contacto
*   @function
*/

const Contacto = () => {

    /* Controladores de los distintos campos */
    
    const [asunto, setAsunto] = useState("");
    const asuntoHandler = (asunto) => { setAsunto(asunto); }

    const [email, setEmail] = useState("");
    const emailHandler = (email) => { setEmail(email); }

    const [mensaje, setMensaje] = useState("");
    const mensajeHandler = (mensaje) => {setMensaje(mensaje); }

    /* Controladores de los mensajes de error/éxito */

    const errores = {
        "email":"El correo electrónico no es válido.",
        "asunto":"El asunto no puede estar vacío ni superar los 150 caracteres.",
        "mensaje":"El mensaje no puede estar vacío ni superar los 2000 caracteres.",
        "exito":"¡Tu mensaje se envió correctamente!"
    }

    const [exitoSubmit, setExitoSubmit] = useState("");
    const [errorAsunto, setErrorAsunto] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");

    /* Controlador del submit del formulario */

    const handleSubmit = (e) => {

        e.preventDefault();

        setExitoSubmit("");

        /* Validar los datos introducidos y mostrar mensajes de error/éxito. */

        const emailValido = validarEmail(email);
        const asuntoValido = validarAsunto(asunto);
        const mensajeValido = validarMensaje(mensaje);

        emailValido ? setErrorEmail("") : setErrorEmail(errores.email);
        asuntoValido ? setErrorAsunto("") : setErrorAsunto(errores.asunto);
        mensajeValido ? setErrorMensaje("") : setErrorMensaje(errores.mensaje);

        if (emailValido && asuntoValido && mensajeValido) {

            /* Borrar campos y mostrar mensaje de éxito */

            setEmail("");
            setAsunto("");
            setMensaje("");
            setExitoSubmit(errores.exito);
        }
    
      }

  return (
    <>
    <Header />
    <main className="form__main"> 
        <header className="section__header">
            <h2>Contacto</h2>
            <p>¡Ayúdanos a mejorar!</p>
        </header>
        <form className="basic__form" onSubmit={handleSubmit}>

            <TextInput onText={emailHandler} label="Correo electrónico:" error={errorEmail} value={email}/>
            <TextInput onText={asuntoHandler} label="Asunto:" error={errorAsunto} value={asunto}/>
            <TextArea onText={mensajeHandler} label="Mensaje:" error={errorMensaje} value={mensaje}/>

            <button className="submit__button">Enviar</button>
            {exitoSubmit && ( <p className="exito"> { exitoSubmit } </p> )}

        </form>
    </main>
    <Footer />
    </>
  )
}

export default Contacto

