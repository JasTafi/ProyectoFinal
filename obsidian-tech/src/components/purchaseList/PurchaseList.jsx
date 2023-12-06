import React, { useEffect, useState } from "react";
import { GetAllPedidos } from "../../services/user_service";
import Accordion from 'react-bootstrap/Accordion';

export const PurchaseList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    GetAllPedidos()
    .then(({pedidos}) => {
      setData(pedidos)
    })
    .catch(err => console.log(err))
  }, [])
  
  return (<section className="purchase-list-section section">
    <div className="purchase-list-container grid container">
     <div className="purchase-list-content">
     <h3 className="section-title">LISTA DE PEDIDOS</h3>
      <hr />
      <Accordion>
      {
        data.map((item, index) => {
          const {nombres, apellidos} = item.nombre
          const {calle, departamento, localidad, numero, provincia} = item.direccion
          const productos = item.producto
          const fecha = item.fecha
          const fechaFormateada = new Date(fecha).toLocaleString()
         return(
          <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>Pedido de: {item.mail}</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li><span>Para:</span> {nombres}, {apellidos}</li>
              <li><p><span>Direccion:</span> Departamento: {departamento}, Calle: {calle} {numero}, Localidad: {localidad}, Provincia: {provincia}</p></li>
              <li><p><span>Realizado en la fecha:</span> {fechaFormateada}</p></li>
            </ul>
            <ol>
              {
                productos.map((elemento, index) => {
                  return(
                    <li key={index}>{elemento.nombre}</li>
                  )
                })
              }
            </ol>
          </Accordion.Body>
        </Accordion.Item>
         )
        })
      }
    </Accordion>
     </div>
    </div>
  </section>)
};
