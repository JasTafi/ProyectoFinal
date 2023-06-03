import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import { getAllProductsFromDB } from '../../services/api'

import '../tarjetasDeProductos/CardProduct.css'

import 'swiper/css';
import "swiper/css/pagination";

export const CardProduct = () => {

  const [dataApi, setDataApi] = useState([])

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
        slidesPerView={4.5}
        spaceBetween={40}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          375: {
            slidesPerView: 1.2,
            spaceBetween: 15
          },
          425: {
            slidesPerView: 1.4,
            spaceBetween: 20
          },
          560: {
            slidesPerView:1.8,
            spaceBetween:20
          },
          768: {
            slidesPerView:2.4,
            spaceBetween: 20
          }
        }}
        modules={[Pagination]}
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
