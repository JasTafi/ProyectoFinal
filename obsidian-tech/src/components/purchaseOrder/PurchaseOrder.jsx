import React, { useContext, useEffect, useState } from "react";
import { AddPurchaseOrder, GetCarProducts } from "../../services/user_service";
import { DataProvider } from "../../context/DataContext";
import Loader from "../loader/Loader.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteCarProduct } from "../../services/user_service";
import { Notification } from "../../services/tostifyNot";

import "../purchaseOrder/PurchaseOrder.css";
import { ModalPurchase } from "../modalPurchaseConfirm/ModalPurchase.jsx";
export const PurchaseOrder = () => {
  const { userInfo, producto, setProducto } = useContext(DataProvider);
  //estado para manejar Loader
  const [loading, setLoading] = useState(false);
  //estado para manejar modalPurchase
  const [showModalPurchase, setShowModalPurchase] = useState(false);
  //estado para manejar GetCarProducts
  const [productCar, setProductCar] = useState([]);
  //estado para iterar id de car_products
  const [productBuy, setProductBuy] = useState([]);
  //estado para manejar handleSubmit
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    departamento: "-",
    calle: "",
    numero: "",
    provincia: "",
    localidad: "",
  });
  async function iterarId(array) {
    const newArray = [];
    try {
      array.map((item) => {
        return newArray.push(item._id);
      });
      return setProductBuy(newArray);
    } catch (error) {
      return console.log(error);
    }
  }
  useEffect(() => {
    setLoading(true);
    GetCarProducts({
      id: userInfo.user.id,
      token: userInfo.user.token,
    })
      .then(({ car_products }) => {
        setProductCar(car_products);
        iterarId(car_products);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000),
          setProducto(false);
      });
  }, [producto]);

  //validaciones
  function validateForm() {
    if(productBuy.length == 0){
      Notification({
        message: "Por favor agrega productos al carrito para realizar la compra",
        type: "error",
      });
      return false
    }
    if (
      formData.nombres.trim() === "" ||
      formData.apellidos.trim() === "" ||
      formData.provincia.trim() === "" ||
      formData.localidad.trim() === "" ||
      formData.calle.trim() === "" ||
      formData.numero.trim() === ""
    ) {
      Notification({
        message: "Por favor completa todos los campos obligatorios",
        type: "error",
      });
      return false;
    }
    const nameRegex = /^[a-zA-Z\s]*$/; // Acepta solo letras y espacios
    if (
      !nameRegex.test(formData.nombres) ||
      !nameRegex.test(formData.apellidos)
    ) {
      Notification({
        message:
          "Los nombres y apellidos no deben contener caracteres especiales",
        type: "error",
      });
      return false;
    }
    const numberRegex = /^\d+$/; // Acepta solo dígitos
    if (!numberRegex.test(formData.numero)) {
      Notification({ message: 'El campo de número solo debe contener dígitos', type: 'error' });
      return false;
    }
    return true;
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleRemoveProduct(productId) {
    DeleteCarProduct({
      id: userInfo.user.id,
      productId: productId,
      token: userInfo.user.token,
    })
      .then((res) => {
        setProducto(true);
        Notification({ message: "Producto eliminado", type: "success" });
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    AddPurchaseOrder({
      userId: userInfo.user.id,
      products: productBuy,
      token: userInfo.user.token,
      nombre: {
        nombres: formData.nombres,
        apellidos: formData.apellidos,
      },
      direccion: {
        departamento: formData.departamento,
        calle: formData.calle,
        numero: formData.numero,
        localidad: formData.localidad,
        provincia: formData.provincia,
      },
    })
      .then((res) => {
        console.log(res),
          setFormData({
            nombres: "",
            apellidos: "",
            departamento: "",
            calle: "",
            numero: "",
            provincia: "",
            localidad: "",
          }),
          setShowModalPurchase(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="purchase section">
          <div className="purchase-container container grid">
            <ModalPurchase
              showModalPurchase={showModalPurchase}
              setShowModalPurchase={setShowModalPurchase}
            />
            <div className="purchase-data">
              <div className="data-content">
                <h2 className="section-title">Orden de compra</h2>
                <h3 className="section-subtitle">
                  Por favor complete los siguientes datos
                </h3>
                <div className="box-mail">
                  <h5>Cuenta:</h5>
                  <span>{userInfo.user.email}</span>
                </div>
                <h4>Entrega</h4>
                <form action="" className="purchase-form">
                  <div className="box-select">
                    <label htmlFor="">Pais</label>
                    <select name="" id="">
                      <option value="Argentina">Argentina</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Brasil">Brasil</option>
                      <option value="Chile">Chile</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Uruguay">Uruguay</option>
                    </select>
                    <input
                      type="text"
                      name="provincia"
                      id=""
                      maxLength={40}
                      placeholder="Provincia"
                      value={formData.provincia}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="localidad"
                      id=""
                      placeholder="Localidad"
                      maxLength={40}
                      value={formData.localidad}
                      onChange={handleChange}
                    />
                    <span>Piso/Departamento:</span>
                    <input
                      type="text"
                      name="departamento"
                      maxLength={40}
                      placeholder="Ejemplo: 1 A"
                      value={formData.departamento}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="box-adress">
                    <input
                      type="text"
                      name="calle"
                      id=""
                      maxLength={40}
                      placeholder="Calle"
                      value={formData.calle}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="numero"
                      id=""
                      maxLength={10}
                      placeholder="Número"
                      value={formData.numero}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="box-name">
                    <input
                      type="text"
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleChange}
                      id=""
                      maxLength={40}
                      placeholder="Nombre/s:"
                    />
                    <input
                      type="text"
                      name="apellidos"
                      maxLength={40}
                      value={formData.apellidos}
                      onChange={handleChange}
                      id=""
                      placeholder="Apellido/s:"
                    />
                  </div>
                </form>
              </div>
              <div className="payment-content">
                <h4>Metodo de Pago</h4>
                <form action="" className="payment-form">
                  <input
                    type="number"
                    name=""
                    id=""
                    maxLength={16}
                    placeholder="numero de tarjeta"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    maxLength={5}
                    placeholder="fecha de expiracion(MM/YY)"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    maxLength={3}
                    placeholder="codigo de seguridad"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    maxLength={50}
                    placeholder="nombre del titular"
                  />
                </form>
              </div>
              <button
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                comprar
              </button>
            </div>
            <div className="purchase-sale">
              <div className="sale-content">
                <h2 className="section-title">Productos a comprar</h2>
                <div className="card-container">
                  {productCar.length == 0 ? (
                    <h2 className="section-title">
                      No hay productos agregados al carrito!
                    </h2>
                  ) : (
                    productCar.map((producto, index) => {
                      return (
                        <div className="card-product" key={index}>
                          <img src={producto.urlImg} alt="" />
                          <div className="box-card-product">
                            <h6>{producto.nombre}</h6>
                            <span>cantidad: 1</span>
                          </div>
                          <span>$ {producto.precio}</span>
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="btn-delete"
                            onClick={() => {
                              handleRemoveProduct(producto._id);
                            }}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
