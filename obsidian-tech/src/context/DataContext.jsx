import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
//contexto
export const DataProvider = createContext();

//creo el proveedor
export const DataContext = ({ children }) => {
<<<<<<< HEAD
  const [userInfo, SetUserInfo] = useState({});
=======

  const [ userData, setUserData ] = useState(null);
  const [ isLogged, setIsLogged ] = useState(false);
>>>>>>> ac446612037caff84285849993fb51faa7417d75

  const initiallValues = {
    data: {
      userData,
      setUserData
    },
    sesion: {
      isLogged,
      setIsLogged
    }
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