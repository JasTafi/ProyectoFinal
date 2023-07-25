import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import { getProductByIdFromDb } from '../../services/product_service';
import '../detalleDeProducto/ProductDetail.css';



const ProductDetail = () => {

	const {id} = useParams();
	
	const [data, setData] = useState([]);
	const [num, setNum] = useState(1)
	const stock = data.stock
	
	function sumar(){
		if(num < stock){
			setNum(num + 1)
		}
	}
	function restar(){
		if(num == 1){
			setNum(1)
		}else{
			setNum(num - 1)
		}
	}
	useEffect(() => {
		getProductByIdFromDb(id)
		.then((res => setData(res)))
		.catch(error => console.log(error))
	}, [])
	
  return (
    <div className='containerProductDetail'>
			<div className='containerDetail'>
				<Link to={'/'} className='linkBack'><FontAwesomeIcon icon={faArrowLeft} className='icon'/>Inicio</Link>
				<div className='boxCateogy'>
					<div className='category'>{data.categoria}</div>
					<button><FontAwesomeIcon icon={faHeart} /></button>
					<p>Agregar a lista de deseos.</p>
				</div>
				<h2>{data.nombre}</h2>
				<div  className='boxDetail'>
					<p>TYPE: {data.categoria}</p>
					<p>Stock: {data.stock}</p>
				</div>
				<h6>Descripcion del producto: {data.descripcion}</h6>
				<div className='boxInputSelect'>
					<label htmlFor="color">Color:</label>
					<select name="" id="color">
						<option value="color1">Negro</option>
						<option value="color2">Blanco</option>
					</select>
				</div>
				<div className='boxPrice1'>
					<span className='precio'>$ {data.precio}</span>
					<div className='boxQuantity'>
						<p>Cantidad:</p>
						<div className='lbl'>
							<button onClick={restar}>-</button>
							<span className='num'>{num}</span>
							<button onClick={sumar} disabled={num==stock}>+</button>
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
						<img src={data.urlImg} alt="" />
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProductDetail