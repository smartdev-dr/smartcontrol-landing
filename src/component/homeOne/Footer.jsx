import React from "react";
import bg from "../../assets/img/bg/footer-bg.jpeg";
import headset from "../../assets/img/icons/headset.svg";
import logoF from "../../assets/img/logo/smartcontrol_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="aai-footer pt-120"
      style={{
        background: `url(${bg}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        <div className="aai-footer-support">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="aai-support-info d-flex align-items-center">
                <div>
                  <img src={headset} alt="" />
                </div>
                <div className="aai-support-contact">
                  <p className="aai-support-text mb-1">
                  Alguna Pregunta? escribenos 24/7
                  </p>
                  <a
                    href="tel:+18093962749"
                    className="aai-support-number"
                  >
                    +1 (809) 396 2749
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aai-newsletter">
                <form>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coloca tu email"
                    />
                    <button className="aai-newsletter-btn">Suscribirse</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="aai-footer-navigation-widgets py-80">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-12"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="50"
            >
              <div className="aai-footer-info">
                <Link to="/" className="aai-footer-logo">
                  <img src={logoF} alt="" height={50} width={50} style={{borderRadius: '50%'}}/>
                </Link>
                <p className="aai-footer-desc">
                  Solucion de Gestión para Proyectos de Construcción <br />

                </p>
                <div className="aai-social-links d-flex">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 mt-5 mt-lg-0">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-4 mb-5 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  <nav className="aai-footer-nav">
                    <h3 className="aai-footer-nav-title">Links</h3>
                    <ul className="aai-footer-nav-list">
                      <li className="aai-footer-nav-list-item">
                        <Link to="/" className="aai-footer-nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="/services" className="aai-footer-nav-link">
                          Service
                        </Link>
                      </li>
                      {/* <li className="aai-footer-nav-list-item">
                        <Link to="/prices" className="aai-footer-nav-link">
                          Pricing
                        </Link>
                      </li> */}
                      <li className="aai-footer-nav-list-item">
                        <Link to="/about" className="aai-footer-nav-link">
                          About US
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="/features" className="aai-footer-nav-link">
                          Feature
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-4 mb-5 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aai-footer-copyright text-center">
          <p className="aai-copyright-text">Copyright @2025 SmartDev SRL</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
