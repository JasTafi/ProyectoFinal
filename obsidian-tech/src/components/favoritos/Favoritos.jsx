import React, { useEffect, useState } from 'react'
import '../favoritos/Favoritos.css';
import { Link } from 'react-router-dom';
import { GetFavoriteProduct } from '../../services/user_service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Favoritos = () => {
	const [ fav, setFav ] = useState([])

	useEffect(() => {
		GetFavoriteProduct({
			id: "64ab23f497e57fc315caf6fe",
			token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFiMjNmNDk3ZTU3ZmMzMTVjYWY2ZmUiLCJpYXQiOjE2ODkxMjcxOTZ9.Yh0-nCN2dkt4n0k34QIHi1NcQfYYu77HY-E0h0ynQiE"
		})
		.then(({favorite_producs
		}) => {
			setFav(favorite_producs
				)
		})
		.catch(err => console.log(err))
	}, [])
	//falta dar estilos

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
							<div className='containerCardFav'>
							{
							 fav.map((item, index) => {
								return(
									<div className='cardBorder'>
										<div className='cardContainer'>
											<div className='cardHead'>
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
											<div className='cardFooter'>
												<div className='boxInput'>
													<label htmlFor="color">Color:</label>
													<select className='options' name='color'>
															<option value={"color1"}>Blanco</option>
															<option value={"color2"}>Negro</option>
													</select>
												</div>
												<div className='boxPrice'>
														<p>$ {item.precio}</p>
														<button> Add to Cart </button>
												</div>
											</div>
										</div>
									</div>									
								)
								})
							}
							</div>
						</div>
        </div>
    </div>
  )
}

export default Favoritos