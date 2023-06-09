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
				<h2>Nombre del Producto.</h2>
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
				<div className='boxPrice1'>
					<span className='precio'>$ 10000</span>
					<div className='boxQuantity'>
						<p>Cantidad:</p>
						<div className='lbl'>
							<button>-</button>
							<span className='num'>1</span>
							<button>+</button>
						</div>
					</div>
				</div>
				<div className='boxBuyAndAdd'>
					<button>Agregar al carrito</button>
					<button>Comprar ya!</button>
				</div>
			</div>
			<div className='containerPictures'>
				<div className='borderColorBox'>
					<div className='containerImg'>
						<img src="https://zonagamer.co/wp-content/uploads/2021/06/J-10L1-.png" alt="" />
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProductDetail