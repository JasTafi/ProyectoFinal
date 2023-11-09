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
  useEffect(() => {
    GetCarProducts({
      id: userInfo.user.id,
      token: userInfo.user.token,
    })
      .then(({ car_products }) => {
        setProductCar(car_products);
        iterarId(car_products);
      })
      .catch((err) => console.log(err));
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
          nombres:'',
          apellidos:'',
          departamento:'',
          calle:'',
          numero:'',
          provincia:'',
          localidad:''
        })
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div className="purchaseContainer section">
        <section className="purchaseOrderData grid">
          <div className="accountData">
            <span className="spanAccount">Cuenta</span>
            <span className="emailAdress">{userInfo.user.email}</span>
          </div>
          <div className="dataPurchaseContainer">
            <h3>Entrega</h3>
            <form onSubmit={handleSubmit} className="formPurchaseOrder">
              <div className="boxName">
                <div className="inputName">
                  <label htmlFor="nombres"></label>
                  <input
                    type="text"
                    name="nombres"
                    id="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    placeholder="nombre/s:"
                  />
                </div>
                <div className="inputLastName">
                  <label htmlFor="apellidos"></label>
                  <input
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    placeholder="Apellido/s:"
                  />
                </div>
              </div>
              <div className="checkBoxApartment">
                <label htmlFor="apartment">vivo en departamento</label>
                <input type="checkbox" name="apartment" id="apartment" />
              </div>
              <div className="boxApartment">
                <label htmlFor="departamento"></label>
                <input
                  type="text"
                  name="departamento"
                  id="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  placeholder="Departamento"
                />
              </div>
              <div className="boxAdress">
                <div className="inputStreet">
                  <label htmlFor="calle"></label>
                  <input
                    type="text"
                    name="calle"
                    id="calle"
                    value={formData.calle}
                    onChange={handleChange}
                    placeholder="Calle"
                  />
                </div>
                <div className="inputNumber">
                  <label htmlFor="numero"></label>
                  <input
                    type="text"
                    name="numero"
                    id="numero"
                    value={formData.numero}
                    onChange={handleChange}
                    placeholder="Número"
                  />
                </div>
              </div>
              <div className="boxState">
                <div className="inputState">
                  <label htmlFor="provincia"></label>
                  <input
                    type="text"
                    name="provincia"
                    id="provincia"
                    value={formData.provincia}
                    onChange={handleChange}
                    placeholder="Provincia"
                  />
                </div>
                <div className="inputCity">
                  <label htmlFor="localidad"></label>
                  <input
                    type="text"
                    name="localidad"
                    id="localidad"
                    value={formData.localidad}
                    onChange={handleChange}
                    placeholder="Localidad"
                  />
                </div>
              </div>
              <button type="submit" className="buttonForm">enviar</button>
            </form>
          </div>
        </section>
        <section className="productToBuy grid">
          <div className="cardProductContainer">
            {productCar.map((item, index) => {
              return (
                <div className="cardProductSale" key={index}>
                  <img src={item.urlImg} alt="" />
                  <div className="nameProductSale">
                    <span>{item.nombre}</span>
                  </div>
                  <span className="priceProductSale">$ {item.precio}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
