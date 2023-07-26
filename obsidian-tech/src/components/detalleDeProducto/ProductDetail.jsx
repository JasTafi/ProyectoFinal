import { useState, useEffect, useContext } from 'react';

import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import { getProductByIdFromDb } from '../../services/product_service';

import { DataProvider } from '../../context/DataContext';

import '../detalleDeProducto/ProductDetail.css';
import { AddFavoriteProduct } from '../../services/user_service';

const ProductDetail = () => {

	const { data:{ userData }} = useContext(DataProvider);
	const {id} = useParams();
	//para mostrar producto
	const [data, setData] = useState([]);
	//para agregar fav
	const [ addFav, setAddFav ] = useState()
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

	  function addFavoritos(){
    AddFavoriteProduct({
      userId: userData.user.id,
      productId: addFav,
      token:userData.token
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  function verificarFav(id){
    if(addFav == id){
      alert("su producto ya esta en sus favoritos");
    }
  }
	
  return (
    <div className='containerProductDetail'>
			<div className='containerDetail'>
				<Link to={'/'} className='linkBack'><FontAwesomeIcon icon={faArrowLeft} className='icon'/>Inicio</Link>
				<div className='boxCateogy'>
					<div className='category'>{data.categoria}</div>
					<button onClick={() => {
						setAddFav(data._id);
						addFavoritos();
						verificarFav(data._id)
					}}><FontAwesomeIcon icon={faHeart} /></button>
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
						<img src={data.urlImg} alt={data.nombre} title={data.nombre}/>
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProductDetail