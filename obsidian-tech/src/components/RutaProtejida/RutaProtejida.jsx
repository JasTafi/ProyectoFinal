import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataProvider } from "../../context/DataContext";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const RutaProtejida = ({ children }) => {
  const { user, isLogged } = useContext(DataProvider);
  const location = useLocation();

  if(user === undefined || user === null || isLogged === false) {
    return <Navigate to='/modalLogin' state={location} />;
  } 

  return children;
};