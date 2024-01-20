import React from "react";
import CatalogoCards from "./CatalogoCards";
import '../catalogo/Catalogo.css'
export const Catalogo = () => {
  return (
    <>
      <header className="header-catalogo">
        <h2>Catalogo de Productos</h2>
      </header>
      <section className="section section-catalogo">
				<div className="container-catalogo container grid">
					<CatalogoCards/>
				</div>
			</section>
    </>
  );
};
