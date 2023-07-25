// import { useState, useContext } from 'react';

// import  { Login } from '../../services/user_service';

// import'../login/ModalLogin.css';
// import { DataProvider } from '../../context/DataContext';

// export default function ModalLogin() {
//   const { setUserInfo, userInfo } = useContext(DataProvider)
//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//     allowsLocaStorage: false,
//   });

//   const [showModal, setShowModal] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     Login({
//       email: user.email,
//       password: user.password,
//     })
//       .then(({ user, token }) => {
//         setUserInfo({
//           isLogged: true,
//           user: {
//             token,
//             id: user.id,
//             photoUrl: user.photoUrl,
//           },
//         })
//         console.log(userInfo);
//         console.log(user);
//       })
//       .catch((error) => console.log(error));
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div>
//       <button className='btn-login' onClick={toggleModal}>Iniciar Sesión</button>
//       <div className={ showModal? 'modalContainer active': 'modalContainer'}>
//         <div className='modalContent'>
//           <button className='btnCerrar' onClick={toggleModal}>cerrar</button>
//           <h3>Inicio de Sesión</h3>
//           <form>
//             <label>
//               Ingresa tu mail:
//               <input
//                 type='email'
//                 name='email'
//                 onChange={(e) => setUser({
//                   ...user,
//                   email: e.target.value,
//                   })
//                 }
//               />
//             </label>
//             <label>
//               Contraseña:
//               <input
//                 type='password'
//                 name='password'
//                 onChange={(e) => setUser({
//                   ...user,
//                   password: e.target.value,
//                   })
//                 }
//               />
//             </label>
//             <label>
//               Mantenerme conectado
//               <input
//                 type='checkbox'
//                 label='Mantenerme Conectado'
//                 onClick={(e) => setUser({
//                   ...user,
//                   allowsLocaStorage: e.target.checked,
//                 })}
//               />
//             </label>
//             <button className='btnSesion' type='button' onClick={handleLogin}>
//               Iniciar Sesión
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../login/ModalLogin.css";

const ModalLogin = () => {
  const [formEnviado, cambiarFormEnviado] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const alternarModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button className="btn-login" onClick={alternarModal}>
        Iniciar Sesión
      </button>
      <div className={ showModal? 'modalContainer active': 'modalContainer'}>
        <div className="modalContent">
          <Formik
            initialValues={{
              email: "",
              password: "",
              allowsLocaStorage: false,
            }}
            validate={(valores) => {
              let errores = {};

              //      Validación del mail
              if (!valores.email) {
                errores.email = "Por favor ingresa un correo electronico";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                errores.email =
                  "El correo solo puede contener letras, numeros, punto y giones";
              }

              //      Validación de la contraseña
              if (!valores.password) {
                errores.password =
                  "La contrasea debe tener entre 8 y 15 caracteres, como minimo una mayuscula, una miniscula, un numero y un caracter especial";
              } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(
                  valores.contraseña
                )
              ) {
                errores.password = "email o contraseá incorrecta";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log("Formulario enviado");
              cambiarFormEnviado(true);
              setTimeout(() => cambiarFormEnviado(false), 5000);
            }}
          >
            {({ errors }) => (
              <Form>
                <div>
                  <label htmlFor="email">Ingresa tu mail</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="email">Contraseña</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage
                    name="contraseña"
                    component={() => (
                      <div className="error">{errors.contraseña}</div>
                    )}
                  />
                </div>
                <button type="submit">Enviar</button>
                {formEnviado && (
                  <p className="exito">Formulario enviado con exito</p>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
