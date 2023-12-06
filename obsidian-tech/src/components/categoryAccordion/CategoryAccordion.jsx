import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Example from "../modalAdministration/modalAdministration";
import "../categoryAccordion/CategoryAccordion.css";

const CategoryAccordion = ({ category, products }) => {
  const categoryProducts = products.filter(
    (item) => item.categoria === category
  );

  return (
    <>
      <h4 className="section-subtitle">{category}</h4>
      <Accordion className="accordion-container">
        {categoryProducts.map((item, index) => (
          <Accordion.Item key={item._id} eventKey={index.toString()}>
            <Accordion.Header>{item.nombre}</Accordion.Header>
            <Accordion.Body className="px-0 w-100">
              <div className="accordionBody">
                <h5>Nombre:</h5>
                <p>{item.nombre}</p>

                <h5>Categoría:</h5>
                <p>{item.categoria}</p>

                <h5>Precio:</h5>
                <p>${item.precio}</p>

                <h5>Stock:</h5>
                <p>{item.stock} u.</p>

                <h5>Descripcion:</h5>
                <p>{item.Descripcion}</p>

                <h5>Imagen:</h5>
                <a
                  href={item.urlImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="image-link-button"
                >
                  Ver imagen
                </a>
                <div className="buttonEdit">
                  <Example item={item} />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default CategoryAccordion;
