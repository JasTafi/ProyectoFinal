import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import '../detalleDeProducto/ProductDetail.css';
import { getProductFromDb } from '../../services/api';


const ProductDetail = () => {

	const {id} = useParams();
	// const [data, setData] = useState([]);
	// console.log(data)
	// useEffect(() => {
	// 	getProductFromDb(id)
	// 	.then((res => setData(res)))
	// }, [])
	
  return (
    <div className='containerProductDetail'>
			<div className='containerDetail'>
				<Link to={'/'} className='linkBack'><FontAwesomeIcon icon={faArrowLeft}/>Inicio</Link>
				<div className='boxCateogy'>
					<div className='category'>categoria</div>
					<button><FontAwesomeIcon icon={faHeart} /></button>
					<p>Agregar a lista de deseos.</p>
				</div>
				<h3>Nombre del Producto.</h3>
				<div  className='boxDetail'>
					<p>TYPE: categoria</p>
					<p>ID: 1234567</p>
				</div>
				<h6>Descripcion del producto: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsa earum a, odit quidem repellat. Harum, ea. Excepturi, quos iure!</h6>
				<div className='boxInputSelect'>
					<label htmlFor="color">Color:</label>
					<select name="" id="color">
						<option value="color1">Negro</option>
						<option value="color2">Blanco</option>
					</select>
				</div>
				<div className='boxPrice'>
					<h4>$ 10000</h4>
					<div className='boxQuantity'>
						<label htmlFor="cantidad">Cantidad:</label>
						<div className='lbl'>
							<button>-</button>
							<input type="number" name="" id="cantidad"/>
							<button>+</button>
						</div>
					</div>
				</div>
				<div className='boxBuyAndAdd'>
					<button>Agregar al carrito</button>
					<button>Comprar ya!</button>
				</div>
			</div>
			<div className='containerPictures'></div>
		</div>
  )
}

export default ProductDetail