import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataProvider } from "../../context/DataContext";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const RutaProtejida = ({ children }) => {
  const { userInfo } = useContext(DataProvider);
  const location = useLocation();

  if( userInfo.islogged === false) {
    alert("Inicia sesion")
    return <Navigate to='/' state={location}></Navigate>;
  }

  return children;
};