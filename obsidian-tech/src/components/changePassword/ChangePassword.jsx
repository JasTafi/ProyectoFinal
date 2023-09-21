import { Formik, Form, Field, ErrorMessage } from "formik";

const ChangePassword = () => {
  return (
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
          return;
        }
      }}
    >
      {({ isSubmitting, isValid, errors }) => (
        <div className="containerRegisterGral">
          <Form>
            <div className="contain-password">
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
                <label htmlFor="string">Ingresa de nuevo tu contraseña</label>
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
  );
};

export default ChangePassword;
