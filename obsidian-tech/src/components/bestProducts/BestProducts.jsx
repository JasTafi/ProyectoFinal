import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import gabinete from '../../assets/bestProduct-gabinete.png';
import cpu from '../../assets/bestProduct-cpu.png';
import "../bestProducts/BestProducts.css";

export const BestProducts = () => {
  return (
    <div className="bgBProduct">
      <div className="circleBlue"></div>
      <section className="bestProduct">
        <div className="bestProductHead">
          <h2 className="bestProductTitle">
            Los mejores productos para juegos profesionales
          </h2>
          <div className="bestProductSubt">
            <p>
              Un hardware más potente no solo mejora sus experiencias en los
              juegos que están jugando actualmente, sino que también brinda a
              muchos jugadores acceso a títulos con especificaciones más
              exigentes. En Obsidian - tech lo tenemos!.
            </p>
          </div>
          <div className="boxBtnBP">
            <Link to={"*"} className="btnBestProduct">
              ver productos <FontAwesomeIcon icon={faGamepad} />
            </Link>
          </div>
        </div>
        <div className="bestProductBody">
          <img
            className="boxImgBP1"
            src={gabinete}
            alt="Gabinete ITX"
            title="Gabinete ITX"
          />
          <div className="borderCardBestProd">
            <div className="bestProductDespriction">
              <h4>PC de escritorio</h4>
              <p>
                Múltiples opciones de conectividad, incluidos HDMI, puertos USB
                y ventiladores RGB, le permiten conectar una variedad de
                periféricos fácilmente. Listo para Wi-Fi: conéctese a Internet
                de forma inalámbrica con facilidad. Precargado con el sistema
                operativo Windows 10 de 64 bits para mejorar la productividad y
                la multitarea.
              </p>
              <Link to={'*'} className="btnBestProduct">ver más</Link>
            </div>
          </div>
          <img
            className="boxImgBP2"
            src={cpu}
            alt="CPU ITX"
            title="CPU ITX"
          />
        </div>
      </section>
    </div>
  );
};
