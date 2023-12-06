import React, { useEffect, useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../modalAdministration/modalAdministration.css";
import { DataProvider } from "../../context/DataContext";
import { DeleteProducto, UpdateProducto } from "../../services/product_service";
import { Notification } from "../../services/tostifyNot";

function Example({ item }) {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(item);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const { userInfo } = useContext(DataProvider);

  function handleDelete() {
    if (!selectedItem || !selectedItem._id) {
      console.error("ID de producto no definido");
      return;
    }

    const idProd = selectedItem._id;

    DeleteProducto({
      token: userInfo.user.token,
      id: idProd,
    })
      .then((response) => {
        if (response.ok) {
          Notification({
            message: "Producto Borrado con exito",
            type: "success",
          });
          setShow(false);
        }
      })
      .catch((error) => {
        Notification({ message: "Error al Borrar el Producto", type: "error" });
        console.error("Error al Borrar el Producto", error);
      });
  }

  const handleShow = () => {
    setShow(true);
    setSelectedItem(item); // Actualiza el estado selectedItem con el producto seleccionado
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <Formik
              initialValues={{
                nombreMo: selectedItem.nombre,
                categoriaMo: selectedItem.categoria,
                precioMo: selectedItem.precio,
                stockMo: selectedItem.stock,
                descripcionMo: selectedItem.Descripcion,
                imagenMo: selectedItem.urlImg,
              }}
              validate={(valores) => {
                let errores = {};

                // Validacion nombre
                if (!valores.nombreMo) {
                  errores.nombreMo = "Por favor ingresa el nombre del producto";
                } else if (!/^[\w\s]{5,40}$/.test(valores.nombreMo)) {
                  errores.nombreMo =
                    "El nombre debe contener entre 5 y 40 caracteres y el unico simbolo que acepta es _";
                }

                // Validacion categoria
                if (!valores.categoriaMo) {
                  errores.categoriaMo =
                    "Por favor ingresa la categoria del producto";
                } else if (!/^[a-zA-Z\s]{4,15}$/.test(valores.categoriaMo)) {
                  errores.categoriaMo =
                    "Categoria solo puede contener letras y entre 4 y 15 caracteres";
                }

                // Validacion precio
                if (!valores.precioMo) {
                  errores.precioMo = "Por favor ingresa el precio del producto";
                } else if (!/^\d{1,6}(\.\d{2})?$/.test(valores.precioMo)) {
                  errores.precioMo =
                    "El precio acepta numeros y punto como separador decimal";
                }

                // Validacion stock
                if (!valores.stockMo) {
                  errores.stockMo = "Por favor ingresa el stock del producto";
                } else if (!/^[1-9]\d{0,3}$/.test(valores.stockMo)) {
                  errores.stockMo =
                    "El stock solo puede contener numeros enteros";
                }

                // Validacion descripcion
                if (!valores.descripcionMo) {
                  errores.descripcionMo =
                    "Por favor ingresa la descripcion del producto";
                } else if (!/^.{5,80}$/.test(valores.descripcionMo)) {
                  errores.descripcionMo =
                    "La descripción debe contener entre 5 y 80 caracteres";
                }

                // Validacion imagen
                if (!valores.imagenMo) {
                  errores.imagenMo = "Por favor ingresa la imagen del producto";
                }

                return errores;
              }}
              onSubmit={(valores, { setSubmitting }) => {
                if (!selectedItem || !selectedItem._id) {
                  console.error("ID de producto no definido");
                  return;
                }

                const idProd = selectedItem._id;

                UpdateProducto(idProd, {
                  nombre: valores.nombreMo,
                  categoria: valores.categoriaMo,
                  precio: valores.precioMo,
                  stock: valores.stockMo,
                  Descripcion: valores.descripcionMo,
                  urlImg: valores.imagenMo,
                  token: userInfo.user.token,
                })
                  .then((response) => {
                    if (response.ok) {
                      Notification({
                        message: "Modificación del Producto Exitosa",
                        type: "success",
                      });
                      setShow(false);
                    }
                  })
                  .catch((error) => {
                    Notification({
                      message: "Error al Modificar el Producto",
                      type: "success",
                    });
                    console.error("Error al Modificar el Producto", error);
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({ errors, isSubmitting }) => (
                <div className="divPadreInputModal">
                  <div className="divHijoInput">
                    <Form className="formularioModal">
                      <div>
                        <label htmlFor="nombreMo">Nombre</label>
                        <Field
                          type="text"
                          id="nombreMo"
                          name="nombreMo"
                          placeholder=""
                        />
                        <ErrorMessage
                          name="nombreMo"
                          component={() => (
                            <div className="error">{errors.nombreMo}</div>
                          )}
                        />
                      </div>
                      <div>
                        <label htmlFor="categoriaMo">Categoria</label>
                        <Field
                          type="text"
                          id="categoriaMo"
                          name="categoriaMo"
                        />
                        <ErrorMessage
                          name="categoriaMo"
                          component={() => (
                            <div className="error">{errors.categoriaMo}</div>
                          )}
                        />
                      </div>
                      <div>
                        <label htmlFor="precioMo">Precio</label>
                        <Field type="text" id="precioMo" name="precioMo" />
                        <ErrorMessage
                          name="precioMo"
                          component={() => (
                            <div className="error">{errors.precioMo}</div>
                          )}
                        />
                      </div>
                      <div>
                        <label htmlFor="stockMo">Stock</label>
                        <Field type="text" id="stockMo" name="stockMo" />
                        <ErrorMessage
                          name="stockMo"
                          component={() => (
                            <div className="error">{errors.stockMo}</div>
                          )}
                        />
                      </div>
                      <div>
                        <label htmlFor="descripcionMo">Descripcion</label>
                        <Field
                          id="descripcionMo"
                          name="descripcionMo"
                          as="textarea"
                        />
                        <ErrorMessage
                          name="descripcionMo"
                          component={() => (
                            <div className="error">{errors.descripcionMo}</div>
                          )}
                        />
                      </div>
                      <div>
                        <label htmlFor="imagenMo">Imagen</label>
                        <Field type="text" id="imagenMo" name="imagenMo" />
                        <ErrorMessage
                          name="imagenMo"
                          component={() => (
                            <div className="error">{errors.imagenMo}</div>
                          )}
                        />
                      </div>
                      <div>
                        <button type="submit" disabled={isSubmitting}>
                            Guardar Cambios
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              )}
            </Formik>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Borrar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
