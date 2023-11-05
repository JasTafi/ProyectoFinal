import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import Example from '../modalAdministration/modalAdministration';

const CategoryAccordion = ({ category, products }) => {
  const categoryProducts = products.filter(item => item.categoria === category);

  return (
    <div className="category-container">
      <h4>{category}</h4>
      <Accordion className="accordion1">
        {categoryProducts.map(item => (
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header className="accordion">{item.nombre}</Accordion.Header>
            <Accordion.Body className="accordion">
              <div className="divProductoMaster">
                <div className="divProducto">
                  <h4>Nombre:</h4>
                  <p>{item.nombre}</p>
                </div>
                <div className="buttonEdit">
                  <Example />
                </div>
              </div>
              <div className="divProducto">
                <h4>Categoría:</h4>
                <p>{item.categoria}</p>
              </div>
              <div className="divProducto">
                <h4>Precio:</h4>
                <p>${item.precio}</p>
              </div>
              <div className="divProducto">
                <h4>Stock:</h4>
                <p>{item.stock} u.</p>
              </div>
              <div className="divProducto">
                <h4>Descripcion:</h4>
                <p>{item.Descripcion}</p>
              </div>
              <div className="botonImagen">
                <h4>Imagen:</h4>
                <a href={item.urlImg} target="_blank" rel="noopener noreferrer" className="image-link-button">
                  Ver imagen
                </a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CategoryAccordion;