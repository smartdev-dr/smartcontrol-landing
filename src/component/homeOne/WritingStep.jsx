import React from "react";
import ProtoTypes from "prop-types";
import addUserIco from "../../assets/img/icons/Add-User.svg";
import homeIco from "../../assets/img/icons/Home.svg";
import walletIco from "../../assets/img/icons/Wallet.svg";

function WritingStep({ className }) {
  return (
    <section className={`writing-steps-area  ${className}`}>
      <div className="container">
        <div className="writing-steps-wrapper" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-4">
              <div className="writing-step">
                <img src={homeIco} className="writing-step-icon" alt="" />
                <h3 className="writing-step-title">Control total de tus proyectos</h3>
                <p className="writing-step-desc">
                  Planifica, asigna tareas, da seguimiento en tiempo real y entrega a tiempo. Desde obras pequeñas hasta grandes desarrollos, mantén todo bajo control.
                </p>
                <div className="writing-step-arrow d-none d-lg-grid">
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L11.4211 9.52632L1 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="writing-step">
                <img src={addUserIco} className="writing-step-icon" alt="" />
                <h3 className="writing-step-title">Gestión inteligente de compras e inventario</h3>
                <p className="writing-step-desc">
                  Genera facturas, gestiona cuentas por cobrar y pagar, y paga nóminas sin complicaciones. Centraliza tu flujo financiero con reportes claros y en tiempo real.
                </p>
                <div className="writing-step-arrow d-none d-lg-grid">
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L11.4211 9.52632L1 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="writing-step border-0 pe-0">
                <img src={walletIco} className="writing-step-icon" alt="" />
                <h3 className="writing-step-title">Finanzas automatizadas y sin errores</h3>
                <p className="writing-step-desc">
                  Genera facturas, gestiona cuentas por cobrar y pagar, y paga nóminas sin complicaciones. Centraliza tu flujo financiero con reportes claros y en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

WritingStep.propTypes = {
  className: ProtoTypes.string,
};

export default WritingStep;
