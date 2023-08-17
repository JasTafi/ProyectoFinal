import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

//contexto
export const DataProvider = createContext();

const initialUserInfo = {
  user: null,
  isLogged: false
}

//creo el proveedor
export const DataContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState(initialUserInfo);


  const initiallValues = {
    userInfo,
    setUserInfo,
    showModal,
    setShowModal
  };
  
  return (
    <DataProvider.Provider value={initiallValues}>
      {children}
    </DataProvider.Provider>
  );
};

DataContext.propTypes = {
  children: PropTypes.node.isRequired,
};