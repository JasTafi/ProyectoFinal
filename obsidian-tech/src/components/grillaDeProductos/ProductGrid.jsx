import { useState } from 'react';

import { Link } from 'react-router-dom';

import { CardProduct } from '../tarjetasDeProductos/CardProduct';

import Loader from '../loader/Loader';

import '../grillaDeProductos/ProductGrid.css';

export const ProductGrid = () => {

  const [loading, setLoading] = useState(true);

  function Loading(){
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }
  return (
    <>
    {
      loading && <Loader/>
    }
    {
      Loading()
    }
    <div className='gridContainer'>
      <div className='introContainer'>
        <div className='titleContainer'>
          <h3>Los Mejores Accesorios Para <span className='titleSpan'>Un Jugador Profesional</span>.</h3>
          <p>Bienvenido a Obsidian Tech, tu destino definitivo para los mejores accesorios de videojuegos. En Obsidian Tech, nos apasiona proporcionarte una experiencia de juego excepcional y elevar tu rendimiento al siguiente nivel.</p>
          <h5>Podes ver el catalogo completo.</h5>
          <p>Nuestro amplio catálogo de accesorios de alta calidad está diseñado pensando en los jugadores más exigentes. Desde auriculares y teclados hasta controladores y mousepad, cada producto de Obsidian Tech ha sido cuidadosamente seleccionado para brindarte el máximo rendimiento y comodidad.</p>
          <div className='buttonLinkContainer'>
            <Link to={"/"} className='button'>Ver Catalogo</Link>
          </div>
        </div>
      </div>
      <CardProduct/>
    </div>
    </>
  )
}
