import React, {useEffect, useState} from 'react';
import '../../stylesheets/vistas/Detalle.css';
import Header from '../navegacion/Header';
import Navbar from '../navegacion/Navbar';
import Footer from '../navegacion/Footer';
import { useParams } from 'react-router-dom';
import { unicoLibro } from '../../scripts/peticiones';
import BotonFavorito from '../input/BotonFavorito';
import Tema from '../Tema';

/**
*   @description Este componente contiene toda la información referente a un libro en particular
*   cuya ID se la haya pasado por parámetro. La información se obtiene desde la API
*   mediante la llamada a la función 'unicoLibro'.
*   @name Detalle
*   @function
*/

const Detalle = () => {

  const [libro, setLibro] = useState(null);

  const params = useParams();
  useEffect(() => {
    unicoLibro(params.id, setLibro)
  }, []);

  const temas = libro?.subjects.map(tema => <Tema key={tema} tema={tema} />);


  return (
    <>
      <Header />
      <Navbar />
      {libro != null ? (
        <article className="vista__libro">
          <section>
            <img alt="Portada" src={libro.formats["image/jpeg"]}></img>
          </section>
          <section className="info__libro">
            <p><strong>Título:</strong> {libro.title}</p>
            <p><strong>Autor:</strong> {libro.authors[0].name} ( {libro.authors[0]["birth_year"]} - {libro.authors[0]["death_year"]} )</p>
            <div className="temas__libro">{temas}</div>
            <p> {libro["download_count"]} descargas.</p>
            <a href={libro.formats["text/html"]}>Leer en el navegador</a>
            <BotonFavorito />
          </section>
        </article>
      ) : ('No existe el libro con esa ID.')}
      <Footer />
    </>
  )
}

export default Detalle
