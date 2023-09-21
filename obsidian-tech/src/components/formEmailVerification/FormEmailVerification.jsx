import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { EmailVerification, ModifyPassword } from "../../services/user_service";

import "./FormEmailVerification.css";

const FormEmailVerification = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  //const [provisionalToken, setProvisionalToken] = useState("");

  //const handleEmailSubmit = (values, { temporaryToken }) => {
  const handleEmailSubmit = (values, { setFieldValue }) => {
    setEmail(values.email);
    EmailVerification(values)
      .then((response) => {
        if (response.ok) {
          setStep(2); //ir al siguiente paso
        } else {
          alert("Correo no registrado");
        }
        console.log({
          ok: true,
          message: "Solicitud de verificacion de correo exitosa",
        });
        //setProvisionalToken(response.tempToken); // Establece provisionalToken
        setFieldValue("provisionalToken", response.tempToken); // Agrega este setFieldValue para asegurarte de que Formik tenga el valor actualizado
      })
      .catch((error) => {
        console.error("Error en la petisión de verificación de correo:", error);
        // return resizeBy.status(400).json({
        //   ok: false,
        //   message: "Error en la petición de verificación de correo",
        //   error: error.message,
        // });
      });
  };

  return (
    <div className="containerRegisterGral">
      {step === 1 && (
        <Formik
          initialValues={{
            email: "",
            provisionalToken: "",
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
                    <Field type="email" name="email" />
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
            if (values.provisionalToken !== values.validateToken) {
              console.error("Token invalido o expirado");
            } else {
              setStep(3);
            }
          }}
        >
          {({ isSubmitting, isValid }) => (
            <div>
              <Form>
                <div className="contain-form">
                  <div className="contain-input">
                    <label htmlFor="token">
                      Paga el token recibido por correo electrónico
                    </label>
                    <Field type="string" name="token" />
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
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.newPassword !== values.confirmPassword) {
              console.log("Las contraseñas no coinciden");
              setSubmitting(false);
            } else {
              ModifyPassword({ email, password: values.newPassword })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.error(
                    "Error en la petición de modificación de contraseña:",
                    error
                  );
                });
            }
          }}
        >
          {({ isSubmitting, isValid, errors }) => (
            <div>
              <Form>
                <div className="contain-form">
                  <div className="contain-input">
                    <label htmlFor="string">Ingresa tu nueva contraseña</label>
                    <Field type="string" name="newPassword" />
                    <ErrorMessage
                      name="newPassword"
                      component={() => (
                        <div className="error">{errors.newPassword}</div>
                      )}
                    />
                  </div>
                  <div className="contain-input">
                    <label htmlFor="string">
                      Ingresa de nuevo tu contraseña
                    </label>
                    <Field type="string" name="confirmPassword" />
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

export default FormEmailVerification;
