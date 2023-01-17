/**
*   @file Validaciones de los campos de input de los formularios.
*   @author Nadina Carla Cardillo Garreta
*   @module Validaciones
*/

const usuariosFalsos = {
    "testUser@gmail.com":"WRt4G!*?7",
    "anotherUser@gmail.com":"FF57u/)?#"
}

/**
*   Comprueba si el email introducido es un email válido mediante una expresión regular 
*   que exige una string dividida en dos mitades por un caracter '@' cuya segunda mitad incluya un 
*   caracter '.' seguido de dos o tres letras.
*
*   @param {string} email - Email introducido por el usuario en el formulario.
*   @returns {boolean}
*/

const validarEmail = (email) => {

    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(email) ? true : false;

}

/**
*   Comprueba que el asunto del mensaje que intenta enviar el usuario no esté vacío
*   ni sea demasiado largo (150 caracteres). 
*
*   @param {string} asunto - Asunto del mensaje que intenta enviar el usuario.
*   @returns {boolean}
*/

const validarAsunto = (asunto) => {

    const regEx = /^(\w{1,150})$/;
    return regEx.test(asunto) ? true : false;
    
}

/**
*   Comprueba que el contenido del mensaje que intenta enviar el usuario no esté vacío
*   ni sea demasiado largo (2000 caracteres). 
*
*   @param {string} mensaje - Contenido del mensaje que intenta enviar el usuario.
*   @returns {boolean}
*/

const validarMensaje = (mensaje) => {

    const regEx = /^(\w{1,2000})$/;
    return regEx.test(mensaje) ? true : false;
    
}

/**
*   Comprueba que el email con el cual el usuario intenta iniciar sesión sea un email
*   que corresponda con el de una cuenta registrada.
*
*   @param {string} email - Email introducido por el usuario en el formulario.
*   @returns {boolean}
*/

const validarEmailExistente = (email) => {

    return Object.keys(usuariosFalsos).includes(email) ? true : false;
    
}

/**
*   Comprueba que la contraseña introducida por el usuario sea la correspondiente
*   al email con el cual intenta iniciar sesión.
*
*   @param {string} email - Email introducido por el usuario en el formulario.
*   @param {string} password - Password introducido por el usuario en el formulario.
*   @returns {boolean}
*/

const validarPasswordExistente = (password, email) => {

    return usuariosFalsos[email] == password ? true : false; 
}

/**
*   Comprueba que la contraseña que el usuario intenta crear para su cuenta cumpla con los
*   requisitos de seguridad básicos mediante una expresión regular (la constraseña debe tener
*   entre 8 y 16 caracteres alfanuméricos y al menos una mayúscula, una minúscula, un número y
*   un caracter especial).
*
*   @param {string} password - Contraseña introducida por el usuario en el formulario.
*   @returns {boolean}
*/

const validarPassword = (password) => {

    const regEx = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/;
    return regEx.test(password) ? true : false;
}

/**
*   Comprueba que el usuario ha introducido dos veces la misma contraseña idéntica a
*   la hora de registrarse en la página.
*
*   @param {string} password - Contraseña introducida por el usuario en el formulario.
*   @param {string} passwordRepetido - Contraseña introducida nuevamente por el usuario en el formulario.
*   @returns {boolean}
*/

const validarPasswordRepetido = (passwordRepetido,password) => {

    return passwordRepetido == password ? true : false;
}

/**
*   Comprueba que la fecha de nacimiento introducida por el usuario es una fecha válida, y que
*   el usuario no sea menor de 16 años antes de poder registrarse en el servicio.
*
*   @param {date} fecha - Fecha de nacimiento introducida por el usuario en el formulario.
*   @returns {boolean}
*/

const validarFechaNacimiento = (fecha) => {
    
    //Validación de formato "yyyy-mm-dd":
    const regEx = /^\d\d\d\d\-\d\d\-\d\d$/
    if (!regEx.test(fecha)) {
        return false;
    }

    //Validación de cada sección de la fecha:
    const secciones = fecha.split('-').map((seccion) => parseInt(seccion, 10));
    secciones[0] -= 1;
    const f = new Date(secciones[0], secciones[1], secciones[2]);
    if (f.getFullYear() !== secciones[0] || f.getMonth() !== secciones[1] || f.getDate() !== secciones[2]) {
        return false;
    }

    //Validación de la edad:
    const actual = new Date();
    const edad = actual.getFullYear() - f.getFullYear();
    return edad >= 16 ? true : false;
}

/**
*   Comprueba que el nombre de usuario con el que intenta registrarse el usuario no esté vacío y sea 
*   válido (un nombre de usuario válido se compone de hasta 30 caracteres alfanuméricos).
*
*   @param {string} nick - Nombre de usuario introducido por el usuario en el formulario.
*   @returns {boolean}
*/

const validarNick = (nick) => {
    
    const regEx = /^([a-z0-9]){1,30}$/i;
    return regEx.test(nick) ? true : false;
}

export {
    validarEmail,
    validarEmailExistente,
    validarPassword,
    validarPasswordExistente,
    validarPasswordRepetido,
    validarAsunto,
    validarMensaje,
    validarFechaNacimiento,
    validarNick
}