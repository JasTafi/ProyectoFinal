import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { AddProductos } from "../../services/product_service";

import "../inputAdminitracion/inputAdministration.css";
import { DataProvider } from "../../context/DataContext";

const InputComponent = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const { userInfo, setProducto } = useContext(DataProvider);

  return (
    <>
      <Formik
        initialValues={{
          nombrePro: "",
          categoria: "",
          precio: "",
          stock: "",
          descripcion: "",
          urlImg: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombrePro) {
            errores.nombrePro = "Por favor ingresa el nombre del producto";
          } else if (/^[\w\s]{5,40}$/.test(valores.nombrePro)) {
            errores.nombrePro =
              "El nombre debe contener entre 5 y 40 caracteres y el unico simbolo que acepta es _";
          }

          // Validacion categoria
          if (!valores.categoria) {
            errores.categoria = "Por favor ingresa la categoria del producto";
          } else if (!/^[a-zA-Z\s]{4,15}$/.test(valores.categoria)) {
            errores.categoria =
              "Categoria solo puede contener letras y entre 4 y 15 caracteres";
          }

          // Validacion precio
          if (!valores.precio) {
            errores.precio = "Por favor ingresa el precio del producto";
          } else if (!/^\d{1,6}(\.\d{2})?$/.test(valores.precio)) {
            errores.precio = "El precio acepta numeros y punto como separador decimal";
          }

          // Validacion stock
          if (!valores.stock) {
            errores.stock = "Por favor ingresa el stock del producto";
          } else if (!/^[1-9]\d{0,3}$/.test(valores.stock)) {
            errores.stock = "El stock solo puede contener numeros enteros";
          }

          // Validacion descripcion
          if (!valores.descripcion) {
            errores.descripcion = "Por favor ingresa la descripcion del producto";
          } else if (/^.{5,80}$/.test(valores.descripcion)) {
            errores.descripcion = "La descripción debe contener entre 5 y 80 caracteres"
          }

          // Validacion imagen
          if (!valores.urlImg) {
            errores.urlImg = "Por favor ingresa la imagen del producto";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          AddProductos({
            nombre: valores.nombrePro,
            categoria: valores.categoria,
            precio: valores.precio,
            stock: valores.stock,
            Descripcion: valores.descripcion,
            urlImg: valores.urlImg,
            token: userInfo.user.token,
          })
            .then((Response) => {
              console.log("Producto creado con exito:", Response);
              setProducto(true);
              resetForm();
            })
            .catch((error) => {
              console.error("Error al crear el producto:", error);
            });
        }}
      >
        {({ errors }) => (
          <section className="inputAdmin-section section">
            <div className="inputAdmin-container container">
              <h3 className="section-title">AGREGAR PRODUCTO</h3>
              <hr></hr>
              <p>Ingrese los productos a la lista de stock</p>
              <Form className="adminForm">
                <div className="box-input-admin">
                  <label htmlFor="nombrePro">Nombre</label>
                  <Field className="input-field" type="text" id="nombrePro" name="nombrePro" />
                  <ErrorMessage
                    name="nombrePro"
                    component={() => (
                      <div className="error">{errors.nombrePro}</div>
                    )}
                  />
                </div>
                <div className="box-input-admin">
                  <label htmlFor="categoria">Categoria</label>
                  <Field className="input-field" type="text" id="categoria" name="categoria" />
                  <ErrorMessage
                    name="categoria"
                    component={() => (
                      <div className="error">{errors.categoria}</div>
                    )}
                  />
                </div>
                <div className="box-input-admin">
                  <label htmlFor="precio">Precio</label>
                  <Field className="input-field" type="text" id="precio" name="precio" />
                  <ErrorMessage
                    name="precio"
                    component={() => (
                      <div className="error">{errors.precio}</div>
                    )}
                  />
                </div>
                <div className="box-input-admin">
                  <label htmlFor="stock">Stock</label>
                  <Field className="input-field" type="text" id="stock" name="stock" />
                  <ErrorMessage
                    name="stock"
                    component={() => (
                      <div className="error">{errors.stock}</div>
                    )}
                  />
                </div>
                <div className="box-input-admin">
                  <label htmlFor="descripcion">Descripcion</label>
                  <Field className="input-field" as="textarea" id="descripcion" name="descripcion" />
                  <ErrorMessage
                    name="descripcion"
                    component={() => (
                      <div className="error">{errors.descripcion}</div>
                    )}
                  />
                </div>
                <div className="box-input-admin">
                  <label htmlFor="urlImg">Imagen</label>
                  <Field className="input-field" type="text" id="urlImg" name="urlImg" />
                  <ErrorMessage
                    name="urlImg"
                    component={() => (
                      <div className="error">{errors.urlImg}</div>
                    )}
                  />
                </div>

                <button type="submit">Cargar producto</button>
                {formularioEnviado && (
                  <p className="enviado">Formulario enviado con exito!</p>
                )}
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default InputComponent;
