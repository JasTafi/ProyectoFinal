import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataProvider } from "../../context/DataContext";
import { useLocation } from "react-router-dom";
import { Notification } from "../../services/tostifyNot";


export const RutaProtejida = ({ children }) => {
  const { userInfo } = useContext(DataProvider);
  const location = useLocation();

  if( !userInfo.islogged ) {
    Notification({ message: 'Debes iniciar sesion para acceder', type: 'error' });
    return <Navigate to='/' state={location}></Navigate>;
  }
  return children;
};