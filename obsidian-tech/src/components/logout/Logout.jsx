import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { DataProvider } from "../../context/DataContext";

import "../logout/Logout.css";

export const Logout = ({setShowModal}) => {
  const { userInfo } = useContext(DataProvider);
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
        <button className="btn-logout">cerrar sesion</button>
      </div>
    </section>
  );
};
