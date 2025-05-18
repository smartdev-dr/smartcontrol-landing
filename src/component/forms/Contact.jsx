import React from "react";
import contact1 from "../../assets/img/icons/contact-1.svg";
import contact2 from "../../assets/img/icons/contact-2.svg";

function Contact() {
  return (
    <section className="aai-contact-form">
      <div className="container">
        <div className="row g-5 align-items-center justify-content-between">
          <div className="col-xl-6 col-lg pe-lg-5">
            <div>
              <h2 className="section-title mb-5">
              Nos encanta colaborar, ¡hagamos grandes cosas juntos!
              </h2>
              <div className="">
                <div className="aai-contact-widget mb-4">
                  <div className="aai-contact-widget-inner d-flex">
                    <div>
                      <img src={contact1} alt="" />
                    </div>
                    <div>
                      <h3 className="aai-contact-widget-title">Nuestra Dirección</h3>
                      <address className="aai-contact-address">
                        Republica Dominicana <br />
                        Bavaro, Punta Cana
                      </address>
                    </div>
                  </div>
                </div>
                <div className="aai-contact-widget mb-4">
                  <div className="aai-contact-widget-inner d-flex">
                    <div>
                      <img src={contact2} alt="" />
                    </div>
                    <div>
                      <h3 className="aai-contact-widget-title">Información de contacto</h3>
                      <p className="aai-contact-support">
                        Abre un chat o llámanos al
                      </p>
                      <a href="tel:8093962749" className="aai-contact-address">
                        +1 (809) 396 2749
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg">
            <div className="aai-contact-form">
              <form>
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-6">
                    <div className="aai-form-input">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Nombre Completo"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="aai-form-input">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Correo"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="aai-form-input">
                      <textarea
                        className="form-control shadow-none text-area"
                        placeholder="Mensaje"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="d-flex justify-content-start">
                      <button className="aai-btn btn-pill-solid">
                       Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
