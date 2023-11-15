import React, { useContext, useEffect, useState } from "react";
import { AddPurchaseOrder, GetCarProducts } from "../../services/user_service";
import { DataProvider } from "../../context/DataContext";
import Loader from '../loader/Loader.jsx';

import "../purchaseOrder/PurchaseOrder.css";
export const PurchaseOrder = () => {
  const { userInfo, producto } = useContext(DataProvider);
  //estado para manejar Loader
  const [ loading, setLoading] = useState(false);
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
        }, 2000);
      })
  }, [producto]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    AddPurchaseOrder({
      userId: userInfo.user.id,
      productId: productBuy,
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
          });
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
    {
      loading ? ( <Loader/>) : ( <section className="purchase section">
      <div className="purchase-container container grid">
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
                  placeholder="Provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="localidad"
                  id=""
                  placeholder="Localidad"
                  value={formData.localidad}
                  onChange={handleChange}
                />
                <span>Piso/Departamento:</span>
                <input
                  type="text"
                  name="departamento"
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
                  placeholder="Calle"
                  value={formData.calle}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="numero"
                  id=""
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
                  placeholder="Nombre/s:"
                />
                <input
                  type="text"
                  name="apellidos"
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
                placeholder="numero de tarjeta"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="fecha de expiracion(MM/YY)"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="codigo de seguridad"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="nombre del titular"
              />
            </form>
          </div>
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            comprar
          </button>
        </div>
        <div className="purchase-sale">
          <div className="sale-content">
            <h2 className="section-title">Productos a comprar</h2>
            <div className="card-container">
              {productCar.map((producto, index) => {
                return (
                  <div className="card-product" key={index}>
                    <img src={producto.urlImg} alt="" />
                    <div className="box-card-product">
                      <h6>{producto.nombre}</h6>
                      <span>cantidad: 0</span>
                    </div>
                    <span>$ {producto.precio}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>)
    }
    </>
  );
};
