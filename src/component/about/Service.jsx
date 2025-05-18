import React, { useState } from "react";
import about1 from "../../assets/img/about/abt-1.png";
import bg from "../../assets/img/bg/about-bg.jpeg";
import mac from "../../assets/img/others/mac.png";
import { Link } from "react-router-dom";
import VideoPopup from "../common/VideoPopup";

function Service() {
  const [videoPopup, setVideoPopup] = useState(false);
  return (
    <section className="aai-services">
      <VideoPopup
        isActive={videoPopup}
        handleActive={() => setVideoPopup(false)}
      />
      <div className="pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div>
                <img src={about1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div>
                <h2 className="section-title mb-4">
                      Hecho por expertos que entienden la construcción
                </h2>
                <p className="section-desc">
                                   Somos un equipo de desarrolladores, ingenieros y contadores con un solo objetivo: ayudarte a tener el control total de tu empresa constructora desde cualquier lugar.

                </p>
              
                <div className="mt-5">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-80"
        style={{
          background: `url(${bg}) no-repeat center center/cover`,
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div>
                <h2 className="section-title mb-4">
                Profesional y directo
                </h2>
                <p className="section-desc">
             Sabemos que en la construcción cada minuto cuenta, cada documento importa y cada peso mal gestionado puede afectar el proyecto.
Por eso creamos un sistema completo, intuitivo y pensado para las necesidades reales del día a día en obras, oficinas y campo.
Desde la planificación, finanzas y personal, hasta la ejecución y supervisión, nuestro software está diseñado para ayudarte a construir mejor… y crecer sin caos.
                </p>
                <ul className="aai-list-items mt-4">
                  <li className="aai-list-item d-flex align-items-center">
                    <svg
                      className="flex-shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#EDCB88" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8047 7.52876C18.0651 7.78911 18.0651 8.21122 17.8047 8.47157L10.4714 15.8049C10.2111 16.0653 9.78894 16.0653 9.5286 15.8049L6.19526 12.4716C5.93491 12.2112 5.93491 11.7891 6.19526 11.5288C6.45561 11.2684 6.87772 11.2684 7.13807 11.5288L10 14.3907L16.8619 7.52876C17.1223 7.26841 17.5444 7.26841 17.8047 7.52876Z"
                        fill="#04091E"
                      />
                    </svg>

                    <span className="aai-list-item-text">
                     Integración perfecta
                    </span>
                  </li>
                  <li className="aai-list-item d-flex align-items-center">
                    <svg
                      className="flex-shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#EDCB88" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8047 7.52876C18.0651 7.78911 18.0651 8.21122 17.8047 8.47157L10.4714 15.8049C10.2111 16.0653 9.78894 16.0653 9.5286 15.8049L6.19526 12.4716C5.93491 12.2112 5.93491 11.7891 6.19526 11.5288C6.45561 11.2684 6.87772 11.2684 7.13807 11.5288L10 14.3907L16.8619 7.52876C17.1223 7.26841 17.5444 7.26841 17.8047 7.52876Z"
                        fill="#04091E"
                      />
                    </svg>
                    <span className="aai-list-item-text">Cotizaciones Profesionales</span>
                  </li>
              
                </ul>
                {/* <div className="mt-5">
                  <Link to="/prices" className="aai-gradient-outline-btn">
                  Iniciemos
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-right">
              <div className="position-relative aai-about-video">
                <img src={mac} className="img-fluid" alt="" />
                <a
                  onClick={() => setVideoPopup(true)}
                  className="aai-about-play-icon video-popup"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 25.0179V10.9821C10.5 9.43849 12.1744 8.47675 13.5077 9.25452L25.5385 16.2724C26.8615 17.0442 26.8615 18.9558 25.5385 19.7276L13.5077 26.7455C12.1744 27.5233 10.5 26.5615 10.5 25.0179Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
