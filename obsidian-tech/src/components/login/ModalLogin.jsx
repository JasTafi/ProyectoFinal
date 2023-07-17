import { useState, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import  { Login } from '../../services/user_service';

import'../login/ModalLogin.css';
import { DataProvider } from '../../context/DataContext';

export default function ModalLogin() {
  const { setUserInfo, useInfo } = useContext(DataProvider)
  const [user, setUser] = useState({
    email: '',
    password: '',
    allowsLocaStorage: false,
  });
  //useState para boton user
  const [loginButton, setLoginButton] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    Login({
      email: user.email,
      password: user.password,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  function openedUserLogin(){//para boton login user
    setLoginButton(!loginButton)
  }

  return (
    <div className='containerLoginGral'>
      <button className='btnLoginUser' onClick={openedUserLogin}><FontAwesomeIcon icon={faUser} /></button>
      <div className={ loginButton ? 'loginContainerLogin active' : 'loginContainerLogin'}>
                <button className='btn-login' onClick={toggleModal}>Login</button>
                <h6>Registro</h6>
              </div>
      <div className={ showModal? 'modalContainer active': 'modalContainer'}>
        <div className='modalContent'>
          <button className='btnCerrar' onClick={() => {
            setShowModal(false)
            setLoginButton(false)
            }}>cerrar</button>
          <h3>Inicio de Sesión</h3>
          <form>
            <label>
              Ingresa tu mail:
              <input
                type='email'
                name='email'
                onChange={(e) => setUser({
                  ...user,
                  email: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Contraseña:
              <input
                type='password'
                name='password'
                onChange={(e) => setUser({
                  ...user,
                  password: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Mantenerme conectado
              <input 
                type='checkbox'
                name='checkbox'
                onClick={(e) => setUser({
                  ...user,
                  allowsLocaStorage: e.target.checked,
                })}
              />
            </label>
            <button className='btnSesion' type='button' onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}