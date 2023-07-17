import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import { GetFavoriteProduct } from '../../services/user_service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CardFavorites } from './CardFavorites';
import '../favoritos/Favoritos.css';


const Favoritos = () => {
	const [ fav, setFav ] = useState([])

	useEffect(() => {
		GetFavoriteProduct({
			id: "64ab23f497e57fc315caf6fe",
			token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFiMjNmNDk3ZTU3ZmMzMTVjYWY2ZmUiLCJpYXQiOjE2ODkxMjcxOTZ9.Yh0-nCN2dkt4n0k34QIHi1NcQfYYu77HY-E0h0ynQiE"
		})
		.then(({favorite_producs
		}) => {
			setFav(favorite_producs)
		})
		.catch(err => console.log(err))
	}, [])
	
	
	const favoritos = fav.length > 0
  return (
    <div className='containerGral'>
        <div className='containerFav'>
					<div className='ventanaFav'>
							<div className='boxTitleFav'>
							<Link to={'/'} className='linkBack'><FontAwesomeIcon icon={faArrowLeft} className='icon'/>Inicio</Link>
								<h2>Lista de Favoritos</h2>
								<p>Aquí podras ver todos los productos que hayas seleccionado, así como también quitarlos si encuentras uno mejor!.</p>
							</div>
							<div className='boxFav'>
								<h3>Favoritos {fav.length}</h3>
								<div className='containerCardFav'>
								{
								(fav.length == 0 ? <h2 className='favEmpty'>No tienes productos agregados a favoritos!</h2> : <CardFavorites fav={fav} />)
								}
								</div>
								{
								favoritos && (
									<div className='buttonsFav'>
										<button className='buttonCartFav'> Seguir comprando </button>
									</div>
									)
								}
							</div>
					</div>
				</div>
    </div>
  )
}

export default Favoritos