import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import '../grillaDeProductos/ProductGrid.css'

export const ProductGrid = () => {
  return (
    <div className='gridContainer'>
			<div className='cardBorder'>
        <div className='cardContainer'>
          <div className='cardHead'>
            <div className='boxCategory'>Categoria</div>
            <button className='boxIcon'>
              <FontAwesomeIcon icon={faHeart}/>
            </button>
          </div>
          <div className='cardBody'>
            <div className='boxTitle'>
              <h4>Teclado Gamer Pro</h4>
              <p>TYPE: Teclado</p>
            </div>
            <div className='boxImage'>
              <img src="https://d22fxaf9t8d39k.cloudfront.net/f65ad7c8036f1e99b17e1e3fbcd89625026e26a0e81e4af34b1dc8b0cf7d235c169554.png" title='Teclado Gamer Pro RGBA' alt="Teclado Gamer Pro RGBA" />
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
                <p>$ 5000</p>
                <button> Add to Cart </button>
            </div>
          </div>
        </div>
      </div>
		</div>
  )
}
