import React from "react";
import ProtoTypes from "prop-types";
import bg from "../../assets/img/bg/cta-bg.jpeg";
import img from "../../assets/img/cta/cta-screen.png";
import { Link } from "react-router-dom";

function Cta({ className }) {
  return (
    <section
      className={`aai-cta pb-120 ${className}`}
      style={{ background: `url(${bg}) no-repeat center center/cover` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg">
            <div>
              <h2 className="section-title mb-4">
              Lleva tus proyectos y actividades en el  
                <span className="position-relative">
                  <span className="position-relative aai-cta-line z-3">
                  {" "}
                  </span>
                </span>
                 bolsillo
              </h2>
              <p className="section-desc">
              Con nuestra app móvil, tus empleados y supervisores gestionan tareas, reportan avances y reciben notificaciones en tiempo real, estén donde estén.
              </p>
              {/* <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group">
                <Link to="/prices" className="aai-btn btn-pill-solid">
                  Ver más
                </Link>
                <Link to="/about" className="aai-gradient-outline-btn">
                  Learn More
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="col-xl-7 col-lg mt-5 mt-xl-0"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="aai-cta-img">
              <img src={img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Cta.propTypes = {
  className: ProtoTypes.string,
};

export default Cta;
