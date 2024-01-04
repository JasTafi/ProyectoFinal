import React from "react";

import { Link } from "react-router-dom";

import "../footer/Footer.css";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="containerFooter">
        <div className="containerLogFooter">
          <h2>Obsidian-Tech</h2>
          <p className="about-description">
            Somos expertos en ventas de tecnología, nos dedicamos a proporcionar
            lo mejor para los proyectos de nuestros clientes. Activamente
            buscamos emprendedores interesados en unirse a nuestro proyecto.
            Contáctanos para más información.
          </p>
        </div>
        <div className="containerContactos">
          <h4>CONTACTO:</h4>
          <ul>
            <li className="fas fa-home me-3">
              General Paz 576, Piso 8, oficina 2
            </li>
            <li className="fas fa-home me-3">
              San Miguel de Tucumán, Argentina
            </li>
            <li className="fas fa-envelope me-3">info@Obsidian-Tech.com.ar</li>
            <li className="fas fa-phone me-3"> +54 381 606-4103</li>
          </ul>
          <p>
            Copyright &copy; 2023 Obsidian-Tech. Todos los derechos reservados
          </p>
        </div>


        <div className="containerSocialFooter">
          <h4>SEGUINOS:</h4>
          <ul className="social-list">
           <li> <Link className="linksFoot" to={"https://www.youtube.com/"}>
              Youtube
            </Link></li>
          <li>  <Link className="linksFoot" to={"https://www.instagram.com/"}>
              Instagram
            </Link></li>
           <li> <Link className="linksFoot" to={"https://www.facebook.com/"}>
              Facebook
            </Link></li>
           <li> <Link className="linksFoot" to={"*"}>
              Twitter
            </Link></li>
            <div className="box-logo-rs"></div>
          </ul>
        </div>
      </div>
      <div className="about-logo">
        <h6>Desarrollado por alumnos de la comisión 28i de: </h6>
        <span className="logoRolling">
          {"<"}
          {">"}
        </span>
        <a
          className="linkRolling"
          href="https://web.rollingcodeschool.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          RollingCode SCHOOL
        </a>
      </div>
    </footer>
  );
};

export default Footer;
