import React, { useContext, useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../buycar/BuyCar.css";
import { GetCarProducts } from "../../services/user_service";
import { DataProvider } from "../../context/DataContext";

export const BuyCar = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  const [productDeleted, setProductDeleted] = useState(false)
  const { userInfo } = useContext(DataProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    GetCarProducts({
      id: userInfo.user.id,
      token: userInfo.user.token,
    })
      .then(({car_products}) => {
        setProduct(car_products)
      })
      .catch((err) => console.log(err))
    setShow(true);
  };
    
  return (
    <div className="containerModalCar">
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>

      <Modal className="my-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(product.length == 0) ? (
            <div>no hay productos agregados</div>
          ): ( product.map((item, index) => {
            return (
              <div className="bodyCarModal" key={index}>
                <img src={item.urlImg} alt="" />
                <div className="bodyCarModalprice">
                  <h5>Nombre Producto</h5>
                  <p>precio: {item.precio}</p>
                </div>
              </div>
            );
          }))}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>cerrar</button>
          <button onClick={handleClose}>comprar!</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
