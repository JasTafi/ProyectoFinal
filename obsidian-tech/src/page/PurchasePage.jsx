import React from "react";
import { PurchaseOrder } from '../components/purchaseOrder/PurchaseOrder';
import { RutaProtejida } from "../components/RutaProtejida/RutaProtejida";
export const PurchasePage = () => {
  return <RutaProtejida>
    <PurchaseOrder/>
  </RutaProtejida>;
};
