import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import bg from "../../assets/img/bg/aai-feature-bg.jpeg";
import cardImg from "../../assets/img/features/fi-1.svg";
import cardImg2 from "../../assets/img/features/fi-2.svg";
import cardImg3 from "../../assets/img/features/fi-3.svg";
import cardImg4 from "../../assets/img/features/fi-4.svg";
import cardImg5 from "../../assets/img/features/fi-5.svg";
import cardImg6 from "../../assets/img/features/fi-6.svg";
import FeatureCard from "../cards/FeatureCard";

function Features({ className }) {
  return (
    <section
      className={className ? `aai-features ${className}` : "aai-features"}
      style={{ background: `url(${bg}) no-repeat center center/cover` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="aai-section-title mb-3 text-center mb-5">
              <h2 className="section-title">Todo lo que necesitas para gestionar tus proyectos en un solo lugar</h2>
              <p className="section-desc">
                Desde la planificación hasta la ejecución. Automatiza, organiza y controla cada aspecto de tus proyectos de construcción.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <FeatureCard
            img={cardImg}
            title="Gestión de Proyectos"
            desc="Organiza tus obras, cronogramas, recursos y presupuestos desde un solo panel. Monitorea el avance en tiempo real."
          />
          <FeatureCard
            img={cardImg3}
            title="Facturación y Finanzas"
            desc="Emite facturas, lleva control de ingresos y egresos, visualiza reportes financieros y gestiona cuentas por cobrar y pagar."
          />
          <FeatureCard
            img={cardImg2}
            title="Compras e Inventario"
            desc="Administra tus órdenes de compra, proveedores y el inventario por proyecto u obra. Evita pérdidas y mejora el abastecimiento."
          />
          <FeatureCard
            img={cardImg5}
            title="Gestión de Tareas con App para Empleados"
            desc="Asigna tareas a cada empleado y ellos las verán en su app móvil. Podrán marcar avances, enviar evidencias y recibir notificaciones."
          />
          <FeatureCard
            img={cardImg}
            title="Sistema de Tickets"
            desc="Centraliza las solicitudes internas: pedidos, fallas, requerimientos técnicos y más. Cada solicitud tiene seguimiento y responsable asignado."
          />
          <FeatureCard
            img={cardImg5}
            title="Módulo de Nómina y Personal"
            desc="Control de asistencia, cálculo de pagos por obra o tiempo, y gestión completa del personal obrero y administrativo."
          />
                 <FeatureCard
            img={cardImg}
            title="Gestión de Documentos por Proyecto"
            desc="Guarda planos, contratos, permisos, fotos de avances y cualquier documento relacionado a cada obra. Toda la documentación organizada, segura y siempre disponible."
          />
              <FeatureCard
            img={cardImg}
            title="Cotizaciones Profesionales en Minutos"
            desc="Crea y envía cotizaciones detalladas a tus clientes desde el sistema. Personaliza precios, productos y condiciones con unos pocos clics."
          />
        </div>
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="110"
        >
          {/* <Link to="/services-details" className="aai-btn btn-pill-solid">
          Ver más
          </Link> */}
        </div>
      </div>
    </section>
  );
}

Features.propTypes = {
  className: ProtoTypes.string,
};

export default Features;
