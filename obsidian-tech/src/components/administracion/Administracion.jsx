import React from "react";
import InputComponent from "../inputAdminitracion/inputAdministration";
import DataList from "../toDoListAdministracion/toDoListAdministration";
import { PurchaseList } from "../purchaseList/PurchaseList";
import "../administracion/Administracion.css";

export const Administracion = () => {
  return (
    <main className="administracion-container grid">
      <InputComponent />
      <DataList />
      <PurchaseList/>
    </main>
  );
};
