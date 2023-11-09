import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  EmailVerification,
  GetUserByEmail,
  ModifyPassword,
} from "../../services/user_service";

import { Notification } from "../../services/tostifyNot";

import "./RecoveryPassword.css";

const RecoveryPassword = () => {
  
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleEmailSubmit = (values) => {
    setEmail(values.email);
    GetUserByEmail(values).then(({ temporaryToken }) => {
      if (temporaryToken && temporaryToken.token && temporaryToken.expirationToken < Date.now()) {
        setStep(2);
        Notification({ message: 'Ya te enviamos un código a tu email, por favor ingresalo en el formulario', type: 'success' });
      } else {
        EmailVerification(values)
          .then((response) => {
            if (response.ok) {
              setStep(2); //ir al siguiente paso
              Notification({ message: 'Te enviamos un código a tu email, ingresalo en el formulario', type: 'success' });
            } else {
              Notification({ message: 'Correo no registrado', type: 'error' })
            }
            console.log({
              ok: true,
              message: "Solicitud de verificacion de correo exitosa",
            });
          })
          .catch((error) => {
            console.error(
              "Error en la petisión de verificación de correo:",
              error
            );
          });
      }
    });
  };

  return (
    <div className="containerRegisterGral">
      {step === 1 && (
        <Formik
          initialValues={{
            email: "",
            //provisionalToken: "",
          }}
          validate={(values) => {
            let errors = {};

            // Validación del email
            if (!values.email) {
              errors.email = "Por favor ingrese una direccion de mail";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email =
                "El mail solo puede contener letras, numerospuntos guiones y caracteres speciales";
            }
          }}
          onSubmit={handleEmailSubmit}
        >
          {({ isSubmitting, isValid, errors }) => (
            <div>
              <Form>
                <div className="contain-form">
                  <div className="contain-input">
                    <label htmlFor="email">Ingresa tu mail</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="error">{errors.email}</div>
                      )}
                    />
                  </div>
                  <button
                    className="btnInputReg"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      )}
      {step === 2 && (
        <Formik
          initialValues={{
            validateToken: "",
          }}
          onSubmit={(values) => {
            GetUserByEmail(email).then(({user, TemporaryToken }) => {
              if (values.validateToken === TemporaryToken.token) {
                setStep(3);
                Notification({ message: 'Perfecto, ahora ingresa una nueva contraseña', type: 'success' });
              } else {
                Notification({ message: 'Los token no coinciden', type: 'error' });
                console.log(values.validateToken); //Borrar
                console.log(user); // Borrar
              }
            });
          }}
        >
          {({ isSubmitting, isValid }) => (
            <div>
              <Form>
                <div className="contain-form">
                  <div className="contain-input">
                    <label htmlFor="validateToken">
                      Paga el token recibido por correo electrónico
                    </label>
                    <Field
                      type="password"
                      id="validateToken"
                      name="validateToken"
                    />
                  </div>
                  <button
                    className="btnInputReg"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >
                    Comparar token
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      )}
      {step === 3 && (
        <Formik
          initialValues={{
            newPassword: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            let errors = {};

            // Validación del password
            if (!values.newPassword) {
              errors.newPassword = "Por favor ingrese una contraseña";
            } else if (
              !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.newPassword)
            ) {
              errors.newPassword =
                "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número";
            }

            if (values.newPassword !== values.confirmPassword) {
              errors.confirmPassword = 'Las contraseñas no coinciden';
              //Notification({ message: 'Las contraseñas no Coinciden', type: 'error' });
            }

            return errors;

          }}
          onSubmit={(values) => {
            if (values.newPassword === values.confirmPassword) {
              const password = values.newPassword;
              ModifyPassword({ email, password })
              .then((response) => {
                if(response.ok) {
                  Notification({ message: 'La contraseña se cambio exitosamente', type: 'success' });
                  navigate("/");
                } else {
                  Notification({ message: 'Las contraseñas no coinciden', type: 'error'});
                }
              })
              .catch((error) => {
                console.error('Error al cambiar la contraseña:', error);
              })
            }
          }}
        >
          {({ isSubmitting, isValid, errors }) => (
            <div>
              <Form>
                <div className="contain-form">
                  <div className="contain-input">
                    <label htmlFor="newPassword">
                      Ingresa tu nueva contraseña
                    </label>
                    <Field
                      type="password"
                      id="newPassword"
                      name="newPassword"
                    />
                    <ErrorMessage
                      name="newPassword"
                      component={() => (
                        <div className="error">{errors.newPassword}</div>
                      )}
                    />
                  </div>
                  <div className="contain-input">
                    <label htmlFor="confirmPassword">
                      Ingresa de nuevo tu contraseña
                    </label>
                    <Field
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                    />
                  </div>
                  <button
                    className="btnInputReg"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
};

export default RecoveryPassword;
