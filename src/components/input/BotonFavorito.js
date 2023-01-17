import React, { useState } from 'react';

/**
*   @description El botón permite guardar un libro en favoritos si no se ha guardado ya, y 
*   eliminarlo de favoritos si se ha guardado. Además, se mostrará un botón
*   distinto en función de si el libro ya está en favoritos o no.
*   @name BotonFavorito
*   @function
*   @param {string} props.id La ID del libro al cual va asociado el botón.
*/

const BotonFavorito = (props) => {

  let favoritos = localStorage.getItem("Favoritos")?.split(",").filter((id) => id != "").map(Number);


  const [existe, setExiste] = useState(favoritos?.includes(props.id) ? true : false);

  const eliminar = (id) => { 

    const indice = favoritos.indexOf(id);
    favoritos.splice(indice,1);
    localStorage.setItem("Favoritos",favoritos.join(","));

    console.log("eliminado " + id);
    console.log(indice);
    console.log(favoritos);

    setExiste(favoritos.includes(id) ? true : false); 
  }

  const agregar = (id) => {
    
    favoritos.push(id);
    localStorage.setItem("Favoritos",favoritos.join(","));

    console.log("agregado " + id);
    console.log(favoritos);
    
    setExiste(favoritos.includes(id) ? true : false);
  }
  

  return (
    <>
      {!existe && ( <button className="fave__button" onClick={() => agregar(props.id)}>Añadir a favoritos</button> )}
      {existe && ( <button className="fave__button" onClick={() => eliminar(props.id)}>Eliminar de favoritos</button> )}
    </>
  )
}

export default BotonFavorito

