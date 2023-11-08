import React, { useContext, useEffect, useState } from "react";
import { AddPurchaseOrder, GetCarProducts } from "../../services/user_service";

import "../purchaseOrder/PurchaseOrder.css";
import { DataProvider } from "../../context/DataContext";
export const PurchaseOrder = () => {
  const { userInfo, producto } = useContext(DataProvider);
  const [productCar, setProductCar] = useState([]);
  const [productBuy, setProductBuy] = useState([]);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    departamento: "",
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
  // useEffect(() => {
  //   GetCarProducts({
  //     id: userInfo.user.id,
  //     token: userInfo.user.token,
  //   })
  //     .then(({ car_products }) => {
  //       setProductCar(car_products);
  //       iterarId(car_products);
  //     })
  //     .catch((err) => console.log(err));
  // }, [producto]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   AddPurchaseOrder({
  //     userId: userInfo.user.id,
  //     productId: productBuy,
  //     token: userInfo.user.token,
  //     nombre: {
  //       nombres: formData.nombres,
  //       apellidos: formData.apellidos,
  //     },
  //     direccion: {
  //       departamento: formData.departamento,
  //       calle: formData.calle,
  //       numero: formData.numero,
  //       localidad: formData.localidad,
  //       provincia: formData.provincia,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res),
  //       setFormData({
  //         nombres:'',
  //         apellidos:'',
  //         departamento:'',
  //         calle:'',
  //         numero:'',
  //         provincia:'',
  //         localidad:''
  //       })
  //     })
  //     .catch((err) => console.log(err))
  // }
  return (
    <>
      <section className="purchase section">
        <div className="purchase-container container grid">
          <div className="purchase-data">
            <div className="data-content">
              <h2 className="section-title">Orden de compra</h2>
              <h3 className="section-subtitle">
                Por favor complete los siguientes datos
              </h3>
              <div className="box-mail">
                <h5>Cuenta:</h5>
                <span>email@prueba.com</span>
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
                  <input type="text" name="" id="" placeholder="Provincia" />
                  <input type="text" name="" id="" placeholder="Localidad" />
                </div>
                <div className="box-adress">
                  <input type="text" name="" id="" placeholder="Calle" />
                  <input type="text" name="" id="" placeholder="Número" />
                </div>
                <div className="box-name">
                  <input type="text" name="" id="" placeholder="Nombre/s:" />
                  <input type="text" name="" id="" placeholder="Apellido/s:" />
                </div>
              </form>
            </div>
            <div className="payment-content">
              <h4>Metodo de Pago</h4>
              <form action="" className="payment-form">
                <input type="number" name="" id="" placeholder="numero de tarjeta"/>
                <input type="text" name="" id="" placeholder="fecha de expiracion(MM/YY)"/>
                <input type="text" name="" id="" placeholder="codigo de seguridad"/>
                <input type="text" name="" id="" placeholder="nombre del titular"/>
              </form>
            </div>
          </div>
          <div className="purchase-sale"></div>
        </div>
      </section>
    </>
  );
};
