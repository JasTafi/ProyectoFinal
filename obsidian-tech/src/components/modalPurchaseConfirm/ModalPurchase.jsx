import React from "react";
import { useNavigate } from "react-router-dom";
import '../modalPurchaseConfirm/ModalPurchase.css';
export const ModalPurchase = ({showModalPurchase , setShowModalPurchase}) => {
  const navigate = useNavigate();
	
	if(showModalPurchase) {
		setTimeout(() => {
			setShowModalPurchase(false),
			navigate('/')
		}, 2000)

	}
  return (
	<>
		<article className={showModalPurchase ? "modal-purchase-section section show-modal-purchase" : "modal-purchase-section section"}>
			<div className="modal-purchase-container grid">
				<div className="article">
					<h4 className="modal-purchase-title">Orden de compra exitosa!</h4>
					<span>cargando...</span>
				</div>
			</div>
		</article>
	</>
	);
};
