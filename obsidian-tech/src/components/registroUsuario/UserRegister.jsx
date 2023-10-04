import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CreateUser } from "../../services/user_service";

import { DataProvider } from "../../context/DataContext";
import { Notification } from "../../services/tostifyNot";

import '../registroUsuario/UserRegister.css';

const UserRegister = () => {

  const navigate = useNavigate();
  const { setShowModal } = useContext(DataProvider);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword: "",
        urlPhoto: "",
      }}
      validate={(values) => {
        let errors = {};
        
        // Validación input email
        if(!values.email) {
          errors.email = 'Por favor ingrese una direccion de mail';
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
          errors.email = 'El mail solo puede contener letras, numerospuntos guiones y caracteres speciales';
        }

        //Validación input password
        if(!values.password) {
          errors.password = 'Por favor ingrese una contraseña'
        } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)) {
          errors.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número';
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        if(values.password !== values.repeatPassword) {
          Notification({ message: "No se pudo crear el usuario, verifique que las contraseñas sean iguales", type: "error" });
          setSubmitting(false);
          return;
        }
        CreateUser({
          email: values.email,
          password: values.password,
        })
        .then(Response => {
          navigate("/");
          setShowModal(true);
          const userEmail = Response.data_added?.email || "usuario"; //Si no hay email, usa "usuario" como valor por defecto
          Notification({ message: `Usuario creado con éxito ${userEmail}`, type: "success" });
          // Realizar acciones adicionales despues de crear el usuario
        })
        .catch(error => {
          console.log('Error al crear el usuario:', error);
        })
        .finally(() =>{
          setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting, isValid, errors }) => (
        <div className='containerRegisterGral'>
          <div className='containerForm'>
            <Form>
              <div className='boxTitleRegister'>
                <h4>Registro de usuario.</h4>
              </div>
              <div className='boxInput'>
                <label htmlFor='email'>Ingrese su email</label>
                <Field className='campo' type="email" name="email" />
                <ErrorMessage 
                  name='email' 
                  component={() => (
                    <div className='error'>{errors.email}</div>
                  )}
                />
              </div>
              <div className="boxInput">
                <label htmlFor="password">Ingrese su contraseña</label>
                <Field className='campo' type="password" name="password" />
                <ErrorMessage 
                  name='password' 
                  component={() => (
                    <div className='error'>{errors.password}</div>
                  )} 
                />
              </div>
              <div className="boxInput">
                <label htmlFor="repeatPassword">Repita su contraseña</label>
                <Field
                  className='campo'
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                />
                <ErrorMessage name="repeatPassword" component="div" />
              </div>
              <button className='btnInputReg' type="submit" disabled={isSubmitting || !isValid}>
                Crear Usuario
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default UserRegister;