import React, { useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { DataProvider } from '../../context/DataContext';
import { DeleteFavoriteById } from '../../services/user_service';

import '../favoritos/Favoritos.css';

export const CardFavorites = ({fav, setProductDeleted}) => {

const { userInfo: {user} } = useContext(DataProvider);

// funcion para eliminar fav de la lista
function handleRemoveFav(item_id){
	DeleteFavoriteById({
		id: user.id,
		productId: item_id,
		token: user.token
	})
	.then((res) => {
		setProductDeleted(true)//utilizo el useState para actualizar GetProductFav en el useEffect
	})
	.catch(err => console.log(err))
}

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
											handleRemoveFav(item._id)
											}}
											title='Eliminar Favorito'>
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
