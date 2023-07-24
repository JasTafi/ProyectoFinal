import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DataProvider = createContext();

export const DataContext = ({ children }) => {
  const [userInfo, SetUserInfo] = useState({});

  const initiallValues = {
    userInfo,
    SetUserInfo,
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