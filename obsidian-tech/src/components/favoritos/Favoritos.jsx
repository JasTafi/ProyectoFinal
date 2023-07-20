import React, { useEffect, useState, useContext } from 'react'

import { Link } from 'react-router-dom';

import { GetFavoriteProduct } from '../../services/user_service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CardFavorites } from './CardFavorites';

import { DataProvider } from '../../context/DataContext';

import '../favoritos/Favoritos.css';


const Favoritos = () => {
	const [ fav, setFav ] = useState([])
	const  { data: {userData }, sesion :{setIsLogged} } = useContext(DataProvider);
	console.log("desde favoritos")

	useEffect(() => {
		GetFavoriteProduct({
			id: userData.user.id,
			token:userData.token
		})
		.then(({favorite_producs
		}) => {
			setFav(favorite_producs),
			setIsLogged(true)
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