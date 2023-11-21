import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

//contexto a consumir
export const DataProvider = createContext();

const initialUserInfo = {
  user: null,
  islogged: false,
}

//creo el proveedor  (estos son los DATOS a consumir)
export const DataContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [ showModal, setShowModal] = useState(false);
  const [ producto, setProducto ] = useState(false) //para manejar el carrito de compras


  const initiallValues = {
    userInfo,
    setUserInfo,
    showModal,
    setShowModal,
    producto,
    setProducto
  };
  
  return (
    <DataProvider.Provider value={initiallValues} >
      {children}
    </DataProvider.Provider>
  );
};

DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};