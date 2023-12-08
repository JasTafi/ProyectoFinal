import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataProvider } from "../../context/DataContext";
import { useLocation } from "react-router-dom";
import { Notification } from "../../services/tostifyNot";


export const RutaProtejida = ({ children }) => {
  const { userInfo } = useContext(DataProvider);
  const location = useLocation();

  if( userInfo.islogged ) {
    return children;
  }else{
    Notification({ message: 'Debes iniciar sesion para acceder', type: 'error' });
    return <Navigate to='/' state={location}></Navigate>;
  }
};

//para proteger Administracion
export const ProtectedAdm = ({children}) => {
  const {userInfo} = useContext(DataProvider);
  if(userInfo.islogged && userInfo.user.administrador){
    return children;
  }else{
    Notification({message: 'usuario no autorizado', type: 'error'});
    return <Navigate to={'/'}/>
  }
}
