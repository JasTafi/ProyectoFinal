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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                laudantium excepturi molestiae nemo repellat id magni, eaque
                corporis neque quo distinctio autem nostrum tenetur? Nam sit
                tenetur possimus dolorum vitae.
              </h4>
              <div className="about-card-container">
                <div className="about-card">
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                    alt=""
                  />
                  <h5>Nombre de Ejemplo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis inventore debitis molestiae mollitia labore nostrum?
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                    alt=""
                  />
                  <h5>Nombre de Ejemplo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis inventore debitis molestiae mollitia labore nostrum?
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                    alt=""
                  />
                  <h5>Nombre de Ejemplo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis inventore debitis molestiae mollitia labore nostrum?
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                    alt=""
                  />
                  <h5>Nombre de Ejemplo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis inventore debitis molestiae mollitia labore nostrum?
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                    alt=""
                  />
                  <h5>Nombre de Ejemplo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis inventore debitis molestiae mollitia labore nostrum?
                  </p>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="about-card">
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                    alt=""
                  />
                  <h5>Nombre de Ejemplo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis inventore debitis molestiae mollitia labore nostrum?
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
