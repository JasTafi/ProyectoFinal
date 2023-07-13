import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DeleteFavoriteById } from '../../services/user_service';

import '../favoritos/Favoritos.css';


export const CardFavorites = ({fav}) => {

	const [ favDelete, setFavDelete ] = useState()
	const usuario = {
		id: "64ab23f497e57fc315caf6fe",
		token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFiMjNmNDk3ZTU3ZmMzMTVjYWY2ZmUiLCJpYXQiOjE2ODkxMjcxOTZ9.Yh0-nCN2dkt4n0k34QIHi1NcQfYYu77HY-E0h0ynQiE"
	}
	// funcion para eliminar fav de la lista
	function handleRemoveFav(){
		
		DeleteFavoriteById({
			id: usuario.id,
			productId: favDelete,
			token: usuario.token
		})
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}

	console.log(favDelete)
	
  return (
    <>
		{
			fav.map((item, index) => {
				return(
						<div className='cardBorderFav' key={index}>
								<div className='cardContainerFav'>
										<div className='cardHeadFav'>
												<div className='boxCategory'>{item.categoria}</div>
												<button className={'boxIcon'} onClick={() => {
													setFavDelete(item._id)
													handleRemoveFav()
													location.reload()
													}}>
														<FontAwesomeIcon icon={faHeart}/>
												</button>
										</div>
										<div className='cardBody'>
												<div className='boxTitle'>
														<h4>{item.nombre}</h4>
														<p>TYPE: {item.categoria}</p>
												</div>
												<div className='boxImage'>
														<img src={item.urlImg} />
												</div>
										</div>
										<div className='cardFooterFav'>
												<div className='boxPrice'>
																<p>$ {item.precio}</p>
												</div>
										</div>
								</div>
						</div>									
				)
				})	
		}
		</>
  )
}
