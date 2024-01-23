import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductsFromDB } from "../../services/product_service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useHandleAddFavorite } from "../../hooks/useHandleAddFavorite";
import { useHandleAddCar } from "../../hooks/useHandleAddCar";
import { useFilterProducts } from "./useFilterProducts";

import "../catalogo/Catalogo.css";

export default function CatalogoCards({ initialValues }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { filteredProducts, applyFilter } = useFilterProducts(product);
  const handleAddFavorites = useHandleAddFavorite();
  const handleAddCar = useHandleAddCar();

  const [visibleProducts, setVisibleProducts] = useState(4);
  const cargarTarjetas = () => {
    setVisibleProducts(visibleProducts + 4);
  };
  const handleFilter = () => {
    applyFilter(initialValues);
  };
  useEffect(() => {
    setLoading(true);
    getAllProductsFromDB()
      .then(({ data }) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <button onClick={handleFilter} className="btn-catalogo-filter">
        filtrar
      </button>
      <div
        className={
          loading ? "container-cards-catalogo col" : "container-cards-catalogo"
        }
      >
        {loading ? (
          <div className="container-loader">
            <span className="loader-catalogo"></span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="container-unproduct">
            <h4>No se encontraron productos</h4>
          </div>
        ) : (
          filteredProducts.slice(0, visibleProducts).map((card, index) => {
            return (
              <div className="cardBorder" key={index}>
                <div className="cardContainer">
                  <div className="cardHead">
                    <div className="boxCategory">{card.categoria}</div>
                    <button
                      className={"boxIcon"}
                      onClick={() => {
                        handleAddFavorites(card._id);
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                  <div className="cardBody">
                    <div className="boxTitle">
                      <h4>{card.nombre}</h4>
                      <p>TYPE: {card.categoria}</p>
                    </div>
                    <div className="boxImage">
                      <Link to={`/accesorio/${card._id}`}>
                        <img src={card.urlImg} title={card.nombre} />
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
                      <p>$ {card.precio}</p>
                      <button
                        onClick={() => {
                          handleAddCar(card._id);
                        }}
                      >
                        Add to car
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="box-btn-catalogo">
          <button onClick={cargarTarjetas} className="btn-catalogo">
            mostrar más
          </button>
        </div>
      )}
    </>
  );
}
