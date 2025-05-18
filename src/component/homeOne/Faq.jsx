import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Faq({ className }) {
  return (
    <section className={`aai-faq pb-120 ${className}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-lg">
            <div>
              <h2 className="section-title mb-4">
                Algunas <span className="gradient-text"> Preguntas? </span> <br />
                Tenemos respuestas!
              </h2>
              <p className="section-desc">
                No encontraste tu respuesta aquí? Simplemente envíanos un mensaje para cualquier consulta.
              </p>
              <div className="mt-5">
                <Link to="/contact" className="aai-gradient-outline-btn">
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg mt-5 mt-xl-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="aai-accordions">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button shadow-none collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      ¿Qué tipo de empresas pueden usar esta plataforma?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                       Nuestra solución está diseñada para contratistas, empresas constructoras, ingenieros y cualquier negocio que administre proyectos de construcción, obras civiles o remodelaciones.
                      </p>
                    </div>
                  </div>
                </div>
                 <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button shadow-none collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                  ¿Puedo llevar la facturación y la contabilidad dentro del sistema?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                     Sí. Puedes generar facturas electrónicas, controlar ingresos y egresos, 
                     llevar tus cuentas por cobrar y pagar, y 
                     obtener reportes financieros al instante.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                     ¿Necesito instalar algo para usar el software?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                 No. Nuestra plataforma es 100% en la nube. Puedes acceder desde cualquier dispositivo con conexión a Internet, sin necesidad de instalaciones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button shadow-none collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                    ¿Cómo gestionan la seguridad de mis datos?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                       Usamos cifrado de nivel bancario, backups automáticos y servidores seguros.
                        Tu información está protegida y siempre accesible solo para ti.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button shadow-none collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                     ¿Se puede usar en múltiples obras o proyectos al mismo tiempo?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                       Sí. Puedes gestionar múltiples proyectos activos, cada uno con su propio inventario, personal, presupuesto y reportes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Faq.propTypes = {
  className: ProtoTypes.string,
};

export default Faq;
