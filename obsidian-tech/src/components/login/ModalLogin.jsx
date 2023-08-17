import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import "../login/ModalLogin.css";

import { Login } from "../../services/user_service";
import { DataProvider } from "../../context/DataContext";


const ModalLogin = () => {
  
  const { setUserInfo, showModal, setShowModal } = useContext(DataProvider);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div>
      <button className="btn-login" onClick={handleModal}>
        Iniciar Sesión
      </button>
      <div className={showModal ? "modalContainer active" : "modalContainer"}>
        <div className="modalContent">
          <Formik
            initialValues={{
              email: "",
              password: "",
              allowsLocaStorage: false,
            }}
            validate={(values) => {
              let errores = {};

              // Validacion del email
              if (!values.email) {
                errores.email = "Por favor ingrese un mail";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  values.email
                )
              ) {
                errores.email =
                  "El mail solo puede contener letras, numerospuntos guiones y caracteres speciales";
              }

              return errores;
            }}
            onSubmit={(values) => {
              Login(values)
                .then(({ user, token }) => {
                  setUserInfo({
                    isLogged: true,
                    user: {
                      token,
                      id: user.id,
                      photoUrl: user.photoUrl,
                      email: user.email,
                      allowsLocaStorage: values.allowsLocaStorage,
                    },
                  });
                })
                .catch((error) =>
                  console.log(
                    "Error en la solicitud de inicio de sesión",
                    error
                  )
                )
                .finally(setShowModal(false));
            }}
          >
            {({ errors }) => (
              <Form>
                <div>
                  <label htmlFor="email">Correo electronico</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="password">Ingresa tu contraseña</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="error">{errors.password}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="allowsLocaStorage">
                    Mantenerme conectado
                    <Field type="checkbox" name="allowsLocaStorage" />
                  </label>
                </div>
                <NavLink to={"/registro"} onClick={() => setShowModal(false)}>
                  Registro
                </NavLink>
                <NavLink
                  to={"/recContraseña"}
                  onClick={() => setShowModal(false)}
                >
                  Olvidaste tu Contraseña?
                </NavLink>
                <button type="submit">Enviar</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
