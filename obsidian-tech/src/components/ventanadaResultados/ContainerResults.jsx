import {  useContext } from "react";
import { DataProvider } from "../../context/DataContext";

import { Link } from "react-router-dom";

import "../ventanadaResultados/ContainerResults.css";

export const ContainerResults = ({ resultado, filtered, setFiltered, setClicked }) => {
  const { setProducto } = useContext(DataProvider)
  return (
    <>
      <div
        className={
          filtered.length > 0
            ? "containerShowResults active"
            : "containerShowResults"
        }
      >
        <div className="containerResults">
          {resultado.length !== 0 ? (resultado.map((item) => {
            return (
              <div className="cardResults" key={item._id}>
                <img className="imgDetalle" src={item.urlImg} />
                <Link
                  to={`/accesorio/${item._id}`}
                  className="linkAccesorio"
                  onClick={() => {
                    setFiltered(""),
                    setClicked(false),
                    setProducto(true)
                  }}
                >
                  <div className="nombreYPrecio">
                    <p>{item.nombre}</p>
                    <p className="precio">${item.precio}</p>
                  </div>
                </Link>
              </div>
            );
          })): (
            <div className="cardResults"><span>No se encontró el producto</span></div>
          )}
          <div className="btnGeneral">{resultado.length} Resultados</div>
        </div>
      </div>
    </>
  );
};
