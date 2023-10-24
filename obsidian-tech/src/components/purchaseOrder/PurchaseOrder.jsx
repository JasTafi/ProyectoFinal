import React, { useContext, useEffect, useState } from "react";
import { AddPurchaseOrder, GetCarProducts } from "../../services/user_service";

import "../purchaseOrder/PurchaseOrder.css";
import { DataProvider } from "../../context/DataContext";
export const PurchaseOrder = () => {
  const { userInfo, producto } = useContext(DataProvider);
  const [productToBuy, setProductToBuy] = useState([]);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    departamento: "",
    calle: "",
    numero: "",
    provincia: "",
    localidad: "",
  });
  useEffect(() => {
    GetCarProducts({
      id: userInfo.user.id,
      token: userInfo.user.token,
    })
      .then(({ car_products }) => {
        setProductToBuy(car_products)
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
      productId: productId,
      token: userInfo.user.token,
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      departamento: formData.departamento,
      calle: formData.calle,
      numero: formData.numero,
      localidad: formData.localidad,
      provincia: formData.provincia,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="purchaseContainer">
        <section className="purchaseOrderData">
          <div className="accountData">
            <span className="spanAccount">Cuenta</span>
            <span className="emailAdress">{userInfo.user.email}</span>
          </div>
          <div className="dataPurchaseContainer">
            <h3>Entrega</h3>
            <form onSubmit={handleSubmit} className="formPurchaseOrder">
              <div className="boxName">
                <div className="inputName">
                  <label htmlFor="nombres">Nombre/s:</label>
                  <input
                    type="text"
                    name="nombres"
                    id="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputLastName">
                  <label htmlFor="apellidos">Apellido/s</label>
                  <input
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="checkBoxApartment">
                <label htmlFor="apartment">vivo en departamento</label>
                <input type="checkbox" name="apartment" id="apartment" />
              </div>
              <div className="boxApartment">
                <label htmlFor="departamento">Departamento</label>
                <input
                  type="text"
                  name="departamento"
                  id="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                />
              </div>
              <div className="boxAdress">
                <div className="inputStreet">
                  <label htmlFor="calle">Calle</label>
                  <input
                    type="text"
                    name="calle"
                    id="calle"
                    value={formData.calle}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputNumber">
                  <label htmlFor="numero">Número</label>
                  <input
                    type="text"
                    name="numero"
                    id="numero"
                    value={formData.numero}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="boxState">
                <div className="inputState">
                  <label htmlFor="provincia">Provincia</label>
                  <input
                    type="text"
                    name="provincia"
                    id="provincia"
                    value={formData.provincia}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCity">
                  <label htmlFor="localidad">Localidad</label>
                  <input
                    type="text"
                    name="localidad"
                    id="localidad"
                    value={formData.localidad}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="productToBuy">
          <div className="cardProductContainer">
            {productToBuy.map((item, index) => {
              return (
                <div className="cardProductSale">
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
