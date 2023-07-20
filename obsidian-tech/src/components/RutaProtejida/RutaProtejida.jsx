import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataProvider } from "../../context/DataContext";
import { useLocation } from "react-router-dom";

export const RutaProtejida = ({ children }) => {
  const { sesion } = useContext(DataProvider);
  const location = useLocation();

  if(sesion.isLogged === false) {
    alert("Inicia sesion")
    return <Navigate to='/' state={location}></Navigate>;
  }

  return children;
};