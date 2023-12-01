import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { AddProductos } from "../../services/product_service";

import "../inputAdminitracion/inputAdministration.css";
import { DataProvider } from "../../context/DataContext";

const InputComponent = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const { userInfo } = useContext(DataProvider);

  // const handleSubmit = async (valores, { resetForm }) => {
  //   try {
  //     // Llamada a la función para agregar productos
  //     await AddProductos(valores);
  //     console.log('Producto agregado con éxito');
  //     resetForm(); // Reiniciar el formulario después de enviar con éxito
  //     cambiarFormularioEnviado(true);
  //     setTimeout(() => cambiarFormularioEnviado(false), 3000);
  //   } catch (error) {
  //     console.error('Error al agregar el producto:', error);
  //     // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
  //   }
  // };

  return (
    <>
     <Formik
        initialValues={{
          nombre: "",
          categoria: "",
          precio: "",
          stock: "",
          descripcion: "",
          urlImg: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa el nombre del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion categoria
          if (!valores.categoria) {
            errores.categoria = "Por favor ingresa la categoria del producto";
          } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(valores.categoria)) {
            errores.categoria =
              "El nombre de categoria solo puede contener letras";
          }

          // Validacion precio
          if (!valores.precio) {
            errores.precio = "Por favor ingresa el precio del producto";
          } else if (!/^[0-9]+[.]+[0-9]+$/.test(valores.precio)) {
            errores.precio = "El precio solo puede contener numeros y punto";
          }

          // Validacion stock
          if (!valores.stock) {
            errores.stock = "Por favor ingresa el stock del producto";
          } else if (!/^[0-9]+$/.test(valores.stock)) {
            errores.stock = "El nombre solo puede contener numeros";
          }

          // Validacion descripcion
          if (!valores.descripcion) {
            errores.descripcion =
              "Por favor ingresa la descripcion del producto";
          }

          // Validacion imagen
          if (!valores.urlImg) {
            errores.urlImg = "Por favor ingresa la imagen del producto";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          AddProductos({
            nombre: valores.nombre,
            categoria: valores.categoria,
            precio: valores.precio,
            stock: valores.stock,
            descripcion: valores.escripcion,
            urlImg: valores.urlImg,
            token: userInfo.user.token,
          })
            .then((Response) => {
              console.log("Producto creado con exito:", Response);
              resetForm();
            })
            .catch((error) => {
              console.error("Error al crear el producto:", error);
            });
        }}
      >
        {({ errors }) => (
          <div className="divPadreInput">
            <div className="divHijoInput">
              <h3>AGREGAR PRODUCTO</h3>
              <hr></hr>
              <p>Ingrese los productos a la lista de stock</p>
              <Form className="formulario">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <Field type="text" id="nombre" name="nombre" />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="Categoria">Categoria</label>
                  <Field type="text" id="categoria" name="categoria" />
                  <ErrorMessage
                    name="categoria"
                    component={() => (
                      <div className="error">{errors.categoria}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="Precio">Precio</label>
                  <Field type="text" id="precio" name="precio" />
                  <ErrorMessage
                    name="precio"
                    component={() => (
                      <div className="error">{errors.precio}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="Stock">Stock</label>
                  <Field type="text" id="stock" name="stock" />
                  <ErrorMessage
                    name="stock"
                    component={() => (
                      <div className="error">{errors.stock}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="descripcion">Descripcion</label>
                  <Field id="descripcion" name="descripcion" as="textarea" />
                  <ErrorMessage
                    name="descripcion"
                    component={() => (
                      <div className="error">{errors.descripcion}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="Imagen">Imagen</label>
                  <Field type="text" id="urlImg" name="urlImg" />
                  <ErrorMessage
                    name="urlImg"
                    component={() => (
                      <div className="error">{errors.urlImg}</div>
                    )}
                  />
                </div>

                <button type="submit">Enviar</button>
                {formularioEnviado && (
                  <p className="enviado">Formulario enviado con exito!</p>
                )}
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default InputComponent;
