import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
//contexto
export const DataProvider = createContext();

//creo el proveedor
export const DataContext = ({ children }) => {

  const [ userData, setUserData ] = useState(null);

  const initiallValues = {
    userData,
    setUserData
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