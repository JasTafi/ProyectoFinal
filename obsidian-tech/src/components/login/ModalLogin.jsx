import { useState } from 'react';

import '../login/ModalLogin.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

// Restablecer los campos de entrada
    setUsername('');
    setPassword('');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button className='btn-login' onClick={toggleModal}>Iniciar Sesión</button>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Inicio de Sesión</h2>
            <form>
              <label>
                Usuario:
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Contraseña:
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type='button' onClick={handleLogin}>
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;