import React from 'react'
import '../favoritos/Favoritos.css';
import { Link } from 'react-router-dom';

const Favoritos = () => {
  return (
    <div className='containerGral'>
        <div className='ventanaFav'>
            <div className='boxTitleFav'>
							<Link to="/">Inicio</Link>
							<h3>Lista de Favoritos</h3>
							<p>Aquí podras ver todos los productos que hayas seleccionado, así como también quitarlos si encuentras uno mejor!.</p>
						</div>
						<div className='boxFav'>
							<h3>Favoritos (1)</h3>
						</div>
        </div>
    </div>
  )
}

export default Favoritos