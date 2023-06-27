import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DataProvider = createContext();

export const DataContext = ({ children }) => {
  const [isLogged, SetIsLogged] = useState(false);

  const initiallValues = {
    secion: {
      isLogged,
      SetIsLogged,
    },
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