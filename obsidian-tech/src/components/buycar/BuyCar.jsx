import React, { useContext, useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../buycar/BuyCar.css";
import { DeleteCarProduct, GetCarProducts } from "../../services/user_service";
import { DataProvider } from "../../context/DataContext";

export const BuyCar = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  //para manejar el estado del useEffect de getCarProduct
  const { producto, setProducto} =  useContext(DataProvider)
  const { userInfo } = useContext(DataProvider);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleRemoveProduct(productId) {
    DeleteCarProduct({
      id: userInfo.user.id,
      productId: productId,
      token: userInfo.user.token,
    })
      .then((res) =>{
        setProducto(true)
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    if (userInfo.islogged) {
      GetCarProducts({
        id: userInfo.user.id,
        token: userInfo.user.token,
      })
        .then(({ car_products }) => {
          setProduct(car_products);
        })
        .catch((err) => console.log(err))
        .finally(setProducto(false))
    }
  }, [producto])
  
  return (
    <div className="containerModalCar">
      <div className="circleCount">{product.length || "0"}</div>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>

      <Modal className="containerModalBuyCar" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!userInfo.islogged ? (
            <div>
              <p>debes iniciar sesion para agregar productos al carrito</p>
            </div>
          ) : product.length == 0 ? (
            <div>No hay productos agregados al carrito</div>
          ) : (
            product.map((item, index) => {
              return (
                <div className="bodyCarModal" key={index}>
                  <img src={item.urlImg} alt="" />
                  <div className="bodyCarModalprice">
                    <h5>{item.nombre}</h5>
                    <p>precio: ${item.precio}</p>
                    <button
                      className="btnOutlineGrey"
                      onClick={() => {
                        handleRemoveProduct(item._id)
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btnOutlineGrey" onClick={handleClose}>
            cerrar
          </button>
          <button className="btnGradient" onClick={handleClose}>
            comprar!
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
