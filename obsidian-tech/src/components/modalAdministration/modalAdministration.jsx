import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getAllProductsFromDB } from '../../services/api';
import '../modalAdministration/modalAdministration.css';
import ButtonEdit from './buttonEdit';
import ButtonDelete from './buttonDelete';

function Example({ item }) {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(item);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

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
                nombre: selectedItem.nombre,
                categoria: selectedItem.categoria,
                precio: selectedItem.precio,
                stock: selectedItem.stock,
                descripcion: selectedItem.Descripcion,
                imagen: selectedItem.urlImg,
              }}
            validate={(valores) => {
              let errores = {};

              // Validacion nombre
              if (!valores.nombre) {
                errores.nombre = 'Por favor ingresa el nombre del producto';
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre = 'El nombre solo puede contener letras y espacios';
              }

              // Validacion categoria
              if (!valores.categoria) {
                errores.categoria = 'Por favor ingresa la categoria del producto';
              } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(valores.categoria)) {
                errores.categoria = 'El nombre de categoria solo puede contener letras';
              }

              // Validacion precio
              if (!valores.precio) {
                errores.precio = 'Por favor ingresa el precio del producto';
              } else if (!/^[0-9]+[.]+[0-9]+$/.test(valores.precio)) {
                errores.precio = 'El precio solo puede contener numeros y punto';
              }

              // Validacion stock
              if (!valores.stock) {
                errores.stock = 'Por favor ingresa el stock del producto';
              } else if (!/^[0-9]+$/.test(valores.stock)) {
                errores.stock = 'El nombre solo puede contener numeros';
              }

              // Validacion descripcion
              if (!valores.descripcion) {
                errores.descripcion = 'Por favor ingresa la descripcion del producto';
              }

              // Validacion imagen
              if (!valores.imagen) {
                errores.imagen = 'Por favor ingresa la imagen del producto';
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              // Llama a la función handleActualizarProducto con los valores del formulario.
              handleActualizarProducto(valores);
              resetForm();
              console.log('Formulario enviado');
              cambiarFormularioEnviado(true);
              setTimeout(() => cambiarFormularioEnviado(false), 3000);
            }}
          >
            {( {errors} ) => (
              <div className='divPadreInputModal'>
                <div className='divHijoInput'>
                  <Form className="formularioModal">
                    <div>
                      <label htmlFor="nombre">Nombre</label>
                      <Field
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        placeholder=""
                      />
                      <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                    </div>
                    <div>
                      <label htmlFor="Categoria">Categoria</label>
                      <Field type="text" id="categoria" name="categoria" />
                      <ErrorMessage name="categoria" component={() => <div className="error">{errors.categoria}</div>} />
                    </div>
                    <div>
                      <label htmlFor="Precio">Precio</label>
                      <Field type="text" id="precio" name="precio" />
                      <ErrorMessage name="precio" component={() => <div className="error">{errors.precio}</div>} />
                    </div>
                    <div>
                      <label htmlFor="Stock">Stock</label>
                      <Field type="text" id="stock" name="stock" />
                      <ErrorMessage name="stock" component={() => <div className="error">{errors.stock}</div>} />
                    </div>
                    <div>
                      <label htmlFor="Descripcion">Descripcion</label>
                      <Field id="descripcion" name="descripcion" as="textarea" />
                      <ErrorMessage name="descripcion" component={() => <div className="error">{errors.descripcion}</div>} />
                    </div>
                    <div>
                      <label htmlFor="Imagen">Imagen</label>
                      <Field type="text" id="urlImg" name="imagen" />
                      <ErrorMessage name="imagen" component={() => <div className="error">{errors.imagen}</div>} />
                    </div>
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar cambios
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Borrar producto
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Guardar cambios
          </Button>
          

          
          <ButtonEdit id={selectedItem.id} updatedData={ stock } handleClose={handleClose} />
          <ButtonDelete id={selectedItem.id} handleClose={handleClose} />

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;