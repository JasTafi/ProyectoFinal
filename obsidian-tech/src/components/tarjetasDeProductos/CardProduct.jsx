import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { getAllProductsFromDB } from '../../services/api'

import '../tarjetasDeProductos/CardProduct.css'

export const CardProduct = () => {

  const [dataApi, setDataApi] = useState([])

  useEffect(() => {
    getAllProductsFromDB()
    .then(({data}) => {
      console.log(data)
      setDataApi(data)
    })
    .catch(error => console.log(error))
  }, [])
  

  return (
    <>
    {
      dataApi.map((item, index) => {
        return(
          <div className='cardBorder' key={index}>
            <div className='cardContainer'>
              <div className='cardHead'>
                <div className='boxCategory'>{item.categoria}</div>
                <button className='boxIcon'>
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
    </>
  )
}
