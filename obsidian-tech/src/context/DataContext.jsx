import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

//contexto
export const DataProvider = createContext();

const initialUserInfo = {
  user: null,
  islogged: false,
}

//creo el proveedor
export const DataContext = ({ children }) => {

  //const [ userData, setUserData ] = useState(null);
  //const [ isLogged, setIsLogged ] = useState(false);
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [showModal, setShowModal] = useState(false);

  const initiallValues = {
    userInfo,
    setUserInfo,
    showModal,
    setShowModal
    // data: {
    //   userData,
    //   setUserData,
    // },
    // sesion: {
    //   isLogged,
    //   setIsLogged,
    // }
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