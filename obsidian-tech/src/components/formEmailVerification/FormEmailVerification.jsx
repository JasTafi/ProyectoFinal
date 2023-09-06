import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { EmailVerification } from "../../services/user_service";

import "./FormEmailVerification.css";

const FormEmailVerification = () => {
  const [userResponse, setUserResponse] = useState({
    email: "",
    id: "",
    recoveryCodes: {
        code: "",
        expiresAt: "",
      }
  });

  function generateCode() {
    const min = 1000; // El número más pequeño de 4 dígitos
    const max = 9999; // El número más grande de 4 dígitos
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validate={(values) => {
        let errors = {};

        // Validación del email
        if (!values.email) {
          errors.email = "Por favor ingrese una direccion de mail";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          errors.email =
            "El mail solo puede contener letras, numerospuntos guiones y caracteres speciales";
        }
      }}
      onSubmit={(values) => {
        EmailVerification(values)
          .then((userResponse) => {
            const code = generateCode();
            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 1);
            console.log(code);
            console.log(userResponse);
            setUserResponse({
              ...userResponse,
              recoveryCodes: {
                code: code.toString(),
                expiresAt: expirationDate,
              }
            })
            console.log(userResponse.recoveryCodes);
            console.log(userResponse);
            // if (Array.isArray(userResponse.recoveryCodes)) {
            //   const updatedUser = {
            //     ...userResponse,
            //     recoveryCodes: [
            //       ...userResponse.recoveryCodes,
            //       {
            //         code: code.toString(),
            //         expiresAt: expirationDate,
            //       },
            //     ],
            //   };
            //   setUserResponse(updatedUser);
            //   console.log(code);
            //   console.log(userResponse);
            // } else {
            //   console.error("La propiedad recoveryCodes no es un array en el usuario");
            // }
          })
          .catch((error) => {
            console.error("El email no esta en la base", error);
          });
          console.log(userResponse);
      }}
    >
      {({ isSubmitting, isValid, errors }) => (
        <div className="containerRegisterGral">
          <Form>
            <div className="contain-email">
              <div className="contain-input">
                <label htmlFor="email">Ingresa tu mail</label>
                <Field type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
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
  );
};

export default FormEmailVerification;
