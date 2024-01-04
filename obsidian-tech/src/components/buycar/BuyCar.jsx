import React, { useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { DeleteCarProduct, GetCarProducts } from "../../services/user_service";
import { DataProvider } from "../../context/DataContext";
import { Notification } from "../../services/tostifyNot";

import { useProductCar } from "../../hooks/useProductCar";
import "../buycar/BuyCar.css";

export const BuyCar = () => {
  const [show, setShow] = useState(false);
  const { product } = useProductCar();
  //para manejar el estado del useEffect de getCarProduct
  const { userInfo: {user, islogged} ,producto, setProducto} =  useContext(DataProvider)

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleRemoveProduct(productId) {
    DeleteCarProduct({
      id: user.id,
      productId: productId,
      token: user.token,
    })
      .then((res) =>{
        setProducto(true)
        Notification({ message: 'Producto eliminado', type: 'success' });
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div className="containerModalCar">
      <div className="circleCount">{product.length || "0"}</div>
      <button onClick={handleShow} className="buttonCar">
        <FontAwesomeIcon icon={faCartShopping} />
      </button>

      <Modal className="containerModalBuyCar" scrollable={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyBuyCar">
          {!islogged ? (
            <div>
              <p className="warningMessage">Debes iniciar sesion para agregar productos al carrito</p>
            </div>
          ) : product.length == 0 ? (
            <div className="warningMessage">No hay productos agregados al carrito</div>
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
          <Link to={"/compra"}className={product.length == 0 ? "btnGradient hiddenBtn" : "btnGradient"} onClick={handleClose}>
            comprar!
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
