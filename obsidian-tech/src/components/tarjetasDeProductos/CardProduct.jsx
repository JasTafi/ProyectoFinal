import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";

import { getAllProductsFromDB } from '../../services/api'

import '../tarjetasDeProductos/CardProduct.css'

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export const CardProduct = () => {

  const [dataApi, setDataApi] = useState([])
  const [addFav, setAddFav] = useState(false)//boron addFav

  function addFavoritos(e){
    
    if(e.target== e.target){
      setAddFav(!addFav)
    }
    
  }

  useEffect(() => {
    getAllProductsFromDB()
    .then(({data}) => {
      setDataApi(data)
    })
    .catch(error => console.log(error))
  }, [])
  

  return (
    <>
    <div className='swiperContainer'>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable:true,
        }}
        breakpoints={{
          "320": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "375": {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          "@1.25": {//768
            slidesPerView: 2.6,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 4.5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
    {
      dataApi.map((item, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='cardBorder'>
              <div className='cardContainer'>
                <div className='cardHead'>
                  <div className='boxCategory'>{item.categoria}</div>
                  <button className={addFav ? 'boxIcon active':'boxIcon'} onClick={addFavoritos}>
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
          </SwiperSlide>          
        )
      })
    }
      </Swiper>
    </div>
    <div className='paginacion'/>
    </>
  )
}
