import React, { useState } from "react";
import CatalogoCards from "./CatalogoCards";
import "../catalogo/Catalogo.css";
export const Catalogo = () => {
  const [initialValues, setInitialValues] = useState({
    precio: 0,
    categoria: "",
  });
  const handleMinPrecio = (e) => {
    const { name, value } = e.target;
    setInitialValues({
      ...initialValues,
      [name]: value,
    });
  };
  const handleCategory = (e) => {
    const { name, value } = e.target;
    setInitialValues({
      ...initialValues,
      [name]: value,
    });
  };
  return (
    <>
      <header className="header-catalogo">
        <h2>Catalogo de Productos</h2>
      </header>
      <section className="section section-catalogo">
        <div className="container-filters">
          <div className="filter-category">
            <label htmlFor="categoria">Categoria: </label>
            <select name="categoria" id="categoria" onChange={handleCategory}>
              <option value="all">Todas</option>
              <option value="Teclado">Teclado</option>
              <option value="Mouse">Mouse</option>
              <option value="Auriculares">Auriculares</option>
              <option value="Webcam">Webcam</option>
              <option value="Parlantes">Parlantes</option>
              <option value="Accesorios">Accesorios</option>
              <option value="Memorias">Memorias</option>
            </select>
          </div>
          <div className="filter-price">
           <div className="filter-box-label">
           <label htmlFor="precio">Precio: </label>
            <span>$ {initialValues.precio}</span>
           </div>
            <div className="filter-box-input">
              <span>$0 </span>
              <input
                type="range"
                name="precio"
                id="precio"
                min={0}
                max={170000}
                onChange={handleMinPrecio}
              />
              <span>$170.000</span>
            </div>
          </div>
        </div>
        <div className="container-catalogo container grid">
          <CatalogoCards initialValues={initialValues} />
        </div>
      </section>
    </>
  );
};
