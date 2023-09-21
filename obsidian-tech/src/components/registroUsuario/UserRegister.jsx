import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CreateUser } from "../../services/user_service";

import '../registroUsuario/UserRegister.css';
import { DataProvider } from "../../context/DataContext";

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
          console.log('Las contraseñas no coinciden');
          setSubmitting(false);
          return;
        }
        CreateUser({
          email: values.email,
          password: values.password,
        })
        .then(Response => {
          console.log('Usuario creado:', Response);
          navigate("/");
          setShowModal(true);
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