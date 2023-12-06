import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { DataProvider } from "../../context/DataContext";
import { Notification } from "../../services/tostifyNot";

import "../logout/Logout.css";

export const Logout = () => {

  const { userInfo, setUserInfo, setShowModal, setProducto } = useContext(DataProvider)

  const handleLogout = () => {
    setUserInfo({
      islogged: false,
      user: {},
    });

    //Borro la informacion en localStorage
    localStorage.removeItem("user");

    //Cierro el modal login
    setShowModal(false);

    //Notifico al usuario que cerro sesión con exito
    Notification({ message: "Cierre de sesión exitoso", type: "success" });
  }
  return (
    <section className="logout-section">
      <div className="box-btn">
      <button className="btnCerrar" onClick={() => {
        setShowModal(false)
      }}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      </div>
      <div className="logout-container">
        <h5>Sesion iniciada</h5>
        <span>{userInfo.user.email}</span>
        <button className="btn-logout" onClick={handleLogout}>cerrar sesion</button>
      </div>
    </section>
  );
};
