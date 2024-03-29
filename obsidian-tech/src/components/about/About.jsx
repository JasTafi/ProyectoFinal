import React, { useState } from "react";
import blassStanciuc from '../../assets/Blas Stanciuc2.jpg';
import fer from '../../assets/Fer-Arroyo.jpeg';
import rodrigo from '../../assets/Rodrigo Aragon.jpg';
import gaston from '../../assets/Gaston Monteiro.jpg';
import jose from '../../assets/Jose Sanchez.jpg';
import gonzalo from '../../assets/Gonzalo_Velardez.jpg';
import ramiro from '../../assets/Ramiro Juarez.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Loader from "../loader/Loader";
import "../about/About.css";
const About = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="section bkg-dark">
          <div className="about-container grid">
            <div className="about-content">
              <h2 className="about-title">Quienes somos!</h2>
              <h4 className="about-subtitle">
                Obsidian-Tech, se destaca por ofrecer servicios de
                comercialización de tecnología con un enfoque en la conveniencia
                para sus clientes. Su objetivo es proporcionar los últimos
                productos del mercado a precios competitivos y con opciones de
                financiación. Además, cuentan con un eficiente servicio de
                envíos puerta a puerta, asegurando que los productos lleguen
                puntualmente a los clientes.
              </h4>
              <h2 className="about-title">Nuestros valores:</h2>
              <h4 className="about-subtitle">
                Transparencia por defecto, Mejorar Constantemente, Ser un
                hacedor sin ego, Mostrar gratitud, Elegir el optimismo.
              </h4>
              <h2 className="about-title">Nuestro equipo:</h2>

              <div className="about-card-container">
                <div className="about-card">
                  <img src={fer} alt="" />
                  <h5>Fernando Arroyo</h5>
                  <p>Founder CEO - (San Miguel de Tucumán - Tucumán)</p>
                  <span>Full-Stack Developer</span>
                  <div className="about-social">
                    <a
                      href="http://instagram.com/ferchoar23"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="icono"
                        icon={faSquareInstagram}
                      />
                    </a>
                    <a
                      href="https://github.com/fer3443"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fer3443in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <div className="about-card">
                  <img src={rodrigo} alt="" />
                  <h5>Rodrigo Aragón</h5>
                  <p>Founder CEO - (San Miguel de Tucumán - Tucumán)</p>
                  <span>Full-Stack Developer</span>
                  <div className="about-social">
                    <a
                      href="http://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="icono"
                        icon={faSquareInstagram}
                      />
                    </a>
                    <a
                      href="https://github.com/RoAragon1977"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rodrigo-arag%C3%B3n-6a37a4285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <div className="about-card">
                  <img src={gaston} alt="" />
                  <h5>Gastón Monteiro</h5>
                  <p>
                    Director of Engineering: Platform & Technology (Tucumán)
                  </p>
                  <span>Full-Stack Developer</span>
                  <div className="about-social">
                    <a
                      href="http://instagram.com/ferchoar23"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="icono"
                        icon={faSquareInstagram}
                      />
                    </a>
                    <a
                      href="https://github.com/fer3443"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fer3443in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <div className="about-card">
                  <img src={jose} alt="" />
                  <h5>José Sánchez</h5>
                  <p>Senior Engineer (Tafi Viejo - Tucumán)</p>
                  <span>Full-Stack Developer</span>
                  <div className="about-social">
                    <a
                      href="https://www.instagram.com/jota_sanchez_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="icono"
                        icon={faSquareInstagram}
                      />
                    </a>
                    <a
                      href="https://github.com/JasTafi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jos%C3%A9-sanchez-41321115?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <div className="about-card">
                  <img src={gonzalo} alt="" />
                  <h5>Gonzalo Velardez</h5>
                  <p>Technical Customer Advocate. San Miguel de Tucuman</p>
                  <span>Full-Stack Developer</span>
                  <div className="about-social">
                    <a
                      href="https://www.instagram.com/gonzalodvelardez?igshid=ODA1NTc5OTg5Nw=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="icono"
                        icon={faSquareInstagram}
                      />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <div className="about-card">
                  <img src={blassStanciuc} alt="" />
                  <h5>Blas Stanciuc</h5>
                  <p>Staff Engineer.(Mar del Plata - Buenos Aires)</p>
                  <span>Full-Stack Developer</span>
                  <div className="about-social">
                    <a
                      href="http://instagram.com/blasstanciuc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="icono"
                        icon={faSquareInstagram}
                      />
                    </a>
                    <a
                      href="https://github.com/blassstanciuc
"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/blas-stanciuc-40133611b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <div className="about-card last">
                  <img src={ramiro} alt="" />
                  <h5>Ramiro Juarez</h5>
                  <p>Staff Engineer.(Tucumán - Argentina)</p>
                  <span>Full-Stack Developer</span>
                  <div className="about-social">
                    <a
                      href="https://www.instagram.com/jrah.art/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="icono"
                        icon={faSquareInstagram}
                      />
                    </a>
                    <a
                      href="https://github.com/RamiroMJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="icono" icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
