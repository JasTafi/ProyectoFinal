import React, { useState } from "react";
import "../about/About.css";
import Loader from "../loader/Loader";
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
        <section className="section">
          <div className="about-container grid">
            <div className="about-content">
              <h2 className="about-title">Quienes somos!</h2>
              <h4 className="about-subtitle">
                Obsidian-Tech, se destaca por ofrecer servicios de comercialización de tecnología con un enfoque en la conveniencia para sus clientes. Su objetivo es proporcionar los últimos productos del mercado a precios competitivos y con opciones de financiación. Además, cuentan con un eficiente servicio de envíos puerta a puerta, asegurando que los productos lleguen puntualmente a los clientes. 
              </h4>
              <h2 className="about-title">Nuestros valores:</h2> 
              <h4 className="about-subtitle">
                Transparencia por defecto, Mejorar Constantemente, Ser un hacedor sin ego, 
                Mostrar gratitud, Elegir el optimismo. 
              </h4>
                <h2 className="about-title">Conoce a los integrantes de nuestro equipo:</h2>
                
                           
              <div className="about-card-container">
                <div className="about-card">
                  <img
                    src="/src/assets/Fer-Arroyo.jpeg"
                    alt=""
                  />
                  <h5>Fernando Arroyo</h5>
                  <p>
                    Founder CEO -  (San Miguel de Tucumán - Tucumán)

                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="/src/assets/rodrigo2.jpg"
                    alt=""
                  />
                  <h5>Rodrigo Aragón</h5>
                  <p>
                  Founder CEO -  (San Miguel de Tucumán - Tucumán)
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="/src/assets/Gaston Monteiro.jpg"
                    alt=""
                  />
                  <h5>Gastón Monteiro</h5>
                  <p>
                  Director of Engineering: Platform & Technology (Tucumán)
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="/src/assets/Jose Sanchez.jpg"
                    alt=""
                  />
                  <h5>José Sánchez</h5>
                  <p>
                    Senior Engineer (Tafi Viejo - Tucumán)
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="/src/assets/Gonzalo_Velardez.jpg"
                    alt=""
                  />
                  <h5>Gonzalo Velardez</h5>
                  <p>
                    Technical Customer Advocate.
                    San Miguel de Tucuman
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="/src/assets/Blas Stanciuc2.jpg"
                    alt=""
                  />
                  <h5>Blas Stanciuc</h5>
                  <p>
                  Staff Engineer.(Mar del Plata - Buenos Aires)
                  </p>
                  <span>Full-Stack Developer</span>
                </div>

                <div className="about-card">
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                    alt=""
                  />
                  <h5>Ramiro Juarez</h5>
                  <p>
                    Staff Engineer.(Mar del Plata - Buenos Aires)
                   </p>
                  <span>Full-Stack Developer</span>
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
