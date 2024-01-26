import React, { useEffect, useState } from "react";
import { GetAllPedidos, UpdatePedido } from "../../services/user_service";
import Accordion from "react-bootstrap/Accordion";
import "../purchaseList/PurchaseList.css";
import { Notification } from "../../services/tostifyNot";
export const PurchaseList = () => {
  const [actualizar, setActualizar] = useState(false);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [correo, setCorreo] = useState();
  const [status, setStatus] = useState({
    pedidoId: null,
    mail: "",
    estado: "sin realizar",
    virtual_delete: false,
  });
  useEffect(() => {
    GetAllPedidos()
      .then(({ pedidos }) => {
        setData(pedidos);
        setActualizar(false);
      })
      .catch((err) => console.log(err));
    setStatus((prevStatus) => ({
      ...prevStatus,
      pedidoId: selectedId,
    }));
  }, [actualizar, selectedId]);

  const handleSelectedId = (idPedido, mail) => {
    setSelectedId(idPedido), setCorreo(mail);
  };
  const handleStatus = (e) => {
    const { name, value } = e.target;
    setStatus({
      ...status,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdatePedido({
      pedidoId: status.pedidoId,
      virtualDelete: status.virtual_delete,
      nuevoEstado: status.estado,
      mail: correo,
    })
      .then((res) => {
        setActualizar(true);
        Notification({message: 'Estado de pedido actualizado con exito', type:  'success'})
      })
      .catch((err) => {
        Notification({message: `Error al actualizar estado ${err}`, type: 'error'})
      });
  };
  const renderPedido = (item, index) => {
    const { nombres, apellidos } = item.nombre;
    const { calle, departamento, localidad, numero, provincia } =
      item.direccion;
    const { producto, mail, fecha, _id } = item;
    const fechaFormateada = new Date(fecha).toLocaleString();
    return (
      <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>Pedido de: {item.mail}</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              <span>Para:</span> {nombres}, {apellidos}
            </li>
            <li>
              <p>
                <span>Direccion:</span> Departamento: {departamento}, Calle:{" "}
                {calle} {numero}, Localidad: {localidad}, Provincia: {provincia}
              </p>
            </li>
            <li>
              <p>
                <span>Realizado en la fecha:</span> {fechaFormateada}
              </p>
            </li>
          </ul>
          <ol>
            {producto.map((elemento, index) => {
              return <li key={index}>{elemento.nombre}</li>;
            })}
          </ol>
          <form className="container-status-delete">
            <div className="modify-status">
              <label htmlFor="status">Estado: </label>
              <select
                name="estado"
                id="status"
                onChange={(e) => {
                  handleSelectedId(_id, mail), handleStatus(e);
                }}
              >
                <option>Seleccionar</option>
                <option value="sin realizar">Sin realizar</option>
                <option value="preparando">Preparando</option>
                <option value="realizado">Realizada</option>
              </select>
            </div>
            <div className="modify-status">
              <label htmlFor="delete-purchase">Eliminar: </label>
              <select
                name="virtual_delete"
                id="delete-purchase"
                onChange={handleStatus}
              >
                <option>-</option>
                <option value={false}>No</option>
                <option value={true}>Si</option>
              </select>
            </div>
          </form>
          <div className="box-button-form">
            <button type="submit" onClick={handleSubmit}>
              confirmar
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );
  };
  return (
    <section className="purchase-list-section section">
      <div className="purchase-list-container grid container">
          <h3 className="section-title">LISTA DE PEDIDOS</h3>
          <hr />
        <div className="purchase-list-content">
          <div className="container-acordeon">
            <h5>Pedidos sin realizar</h5>
            <Accordion>
              {data
                .filter(function (item) {
                  return (
                    item.estado === "sin realizar" &&
                    item.virtual_delete === false
                  );
                })
                .map(renderPedido)}
            </Accordion>
          </div>
          <div className="container-acordeon">
            <h5>Pedidos en preparacion</h5>
            <Accordion>
              {data
                .filter(function (item) {
                  return (
                    item.estado === "preparando" &&
                    item.virtual_delete === false
                  );
                })
                .map(renderPedido)}
            </Accordion>
          </div>
          <div className="container-acordeon">
            <h5>Pedidos Realizados</h5>
            <Accordion>
              {data
                .filter(function (item) {
                  return (
                    item.estado === "realizado" &&
                    item.virtual_delete === false
                  );
                })
                .map(renderPedido)}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
