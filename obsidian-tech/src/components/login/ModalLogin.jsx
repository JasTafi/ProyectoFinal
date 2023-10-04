import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Login } from "../../services/user_service";
import { DataProvider } from "../../context/DataContext";
import { BtnGoogleLogin } from "../services_login/BtnGoogleLogin";
import { KEYS } from "../../config/local_storage_constant";
import { Get, Set } from "../../services/local_stoge_service";
import { Notification } from "../../services/tostifyNot";

import "../login/ModalLogin.css";

const ModalLogin = () => {
  const { setUserInfo, setProducto, setShowModal, showModal } = useContext(DataProvider);
  const [user, setUser] = useState({});

  const handleModal = () => {
    formikRef.current.resetForm(); // Resetea el formulario utilizando la referencia
    setShowModal(!showModal);
  };

  useEffect(() => {
    const response = Get(KEYS.USER);

    if(response) {
      setUserInfo({
        islogged: true,
        user: response,
      });
      setUser({
        islogged: true,
        user: response,
      });
    }
  }, [setUserInfo]);

  const formikRef = useRef(); // Crea una referencia al componente Formik

  return (
    <>
      <button className="btn-login" onClick={handleModal}>
        <FontAwesomeIcon icon={faUser} />
      </button>
      <div className={showModal ? "modalContainer active" : "modalContainer"}>
        <div className="modalContent">
          <Formik
            innerRef={formikRef} // Asigna la referencia al componente Formik
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
              console.log(user);
              Login(values)
                .then(({ user, token }) => {
                  setUserInfo({
                    islogged: true,
                    user: {
                      token: user.token,
                      id: user.id,
                      photoUrl: user.photoUrl,
                      email: user.email,
                      allowsLocaStorage: values.allowsLocaStorage,
                    },
                }),

                
                  Set(KEYS.USER, {
                    token: token,
                    id: user.id,
                    photoUrl: user.photoUrl,
                    email: user.email,
                  });
                  
                  setProducto(true),
                  Notification({ message: "Inicio de sesión exitosa", type: "success" });

                })
                .catch((error) => {
                  console.error("Error en la solicitud de inicio de sesión", error);
                  Notification({ message: "Error en el inicio de sesión", type: "error" });
                }) 
                .finally(() =>setShowModal(false));
            }}
          >
            {({ errors }) => (
              <Form>
                <button className="btnCerrar" onClick={handleModal}>cerrar</button>
                <div className="containerModalInput">
                  <label htmlFor="email">Correo electronico</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
                <div className="containerModalInput">
                  <label htmlFor="password">Ingresa tu contraseña</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="error">{errors.password}</div>
                    )}
                  />
                </div>
                <div className="containerModalInput">
                  <label htmlFor="allowsLocaStorage" className="labelCheck">
                  Mantenerme conectado
                    <Field type="checkbox" id="allowsLocaStorage" name="allowsLocaStorage"/>
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
                <button type="submit" className="btnSesionModal">Enviar</button>
              </Form>
            )}
          </Formik>
          <div className="containerModalInput">
            <BtnGoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
