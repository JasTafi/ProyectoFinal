import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../favoritos/Favoritos.css';

export const CardFavorites = ({fav}) => {
  return (
    <>
		{
			fav.map((item, index) => {
				return(
						<div className='cardBorderFav' key={index}>
								<div className='cardContainerFav'>
										<div className='cardHeadFav'>
												<div className='boxCategory'>{item.categoria}</div>
												<button className={'boxIcon'}>
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
