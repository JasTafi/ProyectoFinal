import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSquareInstagram, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
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
          <ul className="contact-list">
            <li className="item-contacto">
              General Paz 576, Piso 8, oficina 2
            </li>
            <li className="item-contacto">San Miguel de Tucumán, Argentina</li>
            <li className="item-contacto">info@Obsidian-Tech.com.ar</li>
            <li className="item-contacto">+54 381 606-4103</li>
          </ul>
        </div>

        <div className="containerSocialFooter">
          <h4>SEGUINOS:</h4>
          <ul className="social-list">
            <li>
              <Link className="linksFoot" to={"https://www.youtube.com/"}>
                <FontAwesomeIcon icon={faYoutube} />
                Youtube
              </Link>
            </li>
            <li>
              <Link className="linksFoot" to={"https://www.instagram.com/"}>
                <FontAwesomeIcon icon={faSquareInstagram} />
                Instagram
              </Link>
            </li>
            <li>
              <Link className="linksFoot" to={"https://www.facebook.com/"}>
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </Link>
            </li>
            <li>
              <Link className="linksFoot" to={"*"}>
                <FontAwesomeIcon icon={faXTwitter} />
                Twitter
              </Link>
            </li>
            <div className="box-logo-rs"></div>
          </ul>
        </div>
      </div>
      <div className="about-logo">
        <div className="box-about-logo">
          <span>Desarrollado por alumnos de la comisión 28i de: </span>
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
        <span className="footer-copyright">
          Copyright &copy; 2023 Obsidian-Tech. Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
