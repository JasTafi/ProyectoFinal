import { Formik, Form, Field, ErrorMessage } from "formik";

const codeVerification = () => {
  return (
    <Formik
      initialValues={{code: "",}}

      validate={(values) => {
        console.log(values);
      }}

      // onSubmit={(values) => {
        
      // }}
    >
      {({ isSubmitting, isValid }) => (
        <div className="contain-code">
          <Form>
            <div>
              <label htmlFor="namber">
                Ingresa el código que recibiste en tu mail
              </label>
              <Field type="namber" name="code" />
              <ErrorMessage />
            </div>
            <button
              className="btnInputReg"
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Enviar
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default codeVerification;
