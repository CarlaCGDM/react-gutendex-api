import React from 'react'
import Avatar from '../images/avatarUsuario.png'
import '../stylesheets/InfoUsuario.css'

const InfoUsuario = (props) => {
  return (
    <div className="info__usuario">
      <img src={Avatar} alt="Imagen del perfil de usuario."/>
      <div>
        <p><strong>Nombre de usuario: </strong>{props.nombre}</p>
        <p><strong>Email: </strong>{props.email}</p>
        <p><strong>Fecha de nacimiento: </strong>{props.fecha}</p>
      </div>
    </div>
  )
}

export default InfoUsuario

