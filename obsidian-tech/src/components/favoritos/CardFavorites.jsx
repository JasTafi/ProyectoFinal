import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Navigate } from 'react-router';

import { DataProvider } from "../../context/DataContext";
import { AddCarProduct, DeleteFavoriteById } from "../../services/user_service";

import "../favoritos/Favoritos.css";

export const CardFavorites = ({ fav, setUpload }) => {
  const { userInfo } = useContext(DataProvider);
  const { setProducto } = useContext(DataProvider);

  // funcion para eliminar fav de la lista
  function handleRemoveFav(item_id) {
    DeleteFavoriteById({
      id: userInfo.user.id,
      productId: item_id,
      token: userInfo.user.token,
    })
      .then((res) => {
        console.log(res + "producto borrado");
        setUpload(true)
      })
      .catch((err) => console.log(err));
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
      {fav.map((item, index) => {
        return (
          <div className="cardBorderFav" key={index}>
            <div className="cardContainerFav">
              <div className="cardHeadFav">
                <div className="boxCategory">{item.categoria}</div>
                <button
                  className={"boxIcon"}
                  onClick={() => {
                    handleRemoveFav(item._id);
                  }}
                  title="Eliminar Favorito"
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
                  <img src={item.urlImg} />
                </div>
              </div>
              <div className="cardFooterFav">
                <div className="boxPrice">
                  <p>$ {item.precio}</p>
                </div>
                <button className="buttonCartFav"  onClick={() => {
                            handleAddCar(item._id);
                          }}>Agregar al carrito</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};