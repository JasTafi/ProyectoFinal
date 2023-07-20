import { useState, useContext } from 'react';

import  { Login } from '../../services/user_service';

import'../login/ModalLogin.css';
import { DataProvider } from '../../context/DataContext';

export default function ModalLogin() {
  const { data: {setUserData}, sesion :{isLogged, setIsLogged} } = useContext(DataProvider);
  
  const [user, setUser] = useState({
    email: '',
    password: '',
    allowsLocaStorage: false,
  });
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    Login({
      email: user.email,
      password: user.password,
    })
      .then((res) => {
        console.log(res)
        setUserData(res)
        setIsLogged(true)
      })
      .catch((error) => console.log(error))
      .finally(setShowModal(false))
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div>
      <button className='btn-login' onClick={toggleModal}>Iniciar Sesión</button>
      <div className={ showModal? 'modalContainer active': 'modalContainer'}>
        <div className='modalContent'>
          <button className='btnCerrar' onClick={toggleModal}>cerrar</button>
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