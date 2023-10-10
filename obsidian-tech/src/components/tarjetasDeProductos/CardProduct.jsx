import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../context/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

import { getAllProductsFromDB } from "../../services/product_service";
import { AddCarProduct, AddFavoriteProduct } from "../../services/user_service";

import "../tarjetasDeProductos/CardProduct.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export const CardProduct = () => {
  const { userInfo } = useContext(DataProvider);
  const { setProducto } = useContext(DataProvider);
  const [dataApi, setDataApi] = useState([]); //trae los productos

  useEffect(() => {
    getAllProductsFromDB()
      .then(({ data }) => {
        setDataApi(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleAddFavorites(id) {
    if (userInfo.islogged == true) {
      AddFavoriteProduct({
        userId: userInfo.user.id,
        productId: id,
        token: userInfo.user.token,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("debes iniciar sesion para agregar a favoritos");
    }
  }

  function handleAddCar(id) {
    AddCarProduct({
      userId: userInfo.user.id,
      productId: id,
      token: userInfo.user.token,
    })
      .then((res) => {
        setProducto(true);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="swiperContainer">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
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
            "@1.25": {
              //768
              slidesPerView: 2.6,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
            "@2.50": {
              slidesPerView: 5.5,
              spaceBetween:30
            }
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {dataApi.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="cardBorder">
                  <div className="cardContainer">
                    <div className="cardHead">
                      <div className="boxCategory">{item.categoria}</div>
                      <button
                        className={"boxIcon"}
                        onClick={() => {
                          handleAddFavorites(item._id);
                        }}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </div>
                    <div className="cardBody">
                      <div className="boxTitle">
                        <h4>{item.nombre}</h4>
                        <p>TYPE: {item.categoria}</p>
                      </div>
                      <div className="boxImage">
                        <Link to={`/accesorio/${item._id}`}>
                        <img src={item.urlImg} title={item.nombre}/>
                        </Link>
                      </div>
                    </div>
                    <div className="cardFooter">
                      <div className="boxInput">
                        <label htmlFor="color">Color:</label>
                        <select className="options" name="color">
                          <option value={"color1"}>Blanco</option>
                          <option value={"color2"}>Negro</option>
                        </select>
                      </div>
                      <div className="boxPrice">
                        <p>$ {item.precio}</p>
                        <button
                          onClick={() => {
                            handleAddCar(item._id);
                          }}
                        >
                          {" "}
                          Add to Cart{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="paginacion" />
    </>
  );
};
