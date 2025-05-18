import React from "react";
import bg1 from "../../assets/img/bg/service-1.jpeg";
import bg2 from "../../assets/img/bg/service-2.jpeg";
import img1 from "../../assets/img/services/service-1.svg";
import img2 from "../../assets/img/services/service-2.svg";
import img3 from "../../assets/img/services/service-3.svg";
import ServiceCard from "../cards/ServiceCard";

function Service() {
  return (
    <section className="aai-services">
      <ServiceCard
        img={img1}
        bg={bg1}
        desc="Nuestro software se adapta a tu realidad: desde obras privadas hasta licitaciones públicas, ayudándote a tomar mejores decisiones con datos claros y en tiempo real."
        title="Hecho para empresas que quieren crecer sin complicaciones"
        features={[
          "Contratistas que necesitan control total de obra o proyectos",
          "Empresas constructoras que manejan múltiples proyectos y cuadrillas.",
          "Ingenieros o arquitectos que buscan seguimiento técnico y financiero en tiempo real.",
        ]}
      />
      <ServiceCard
        img={img2}
        bg={bg2}
        desc="Just let me know the topic or genre you have in mind, and I'll
                  assist you in creating engaging content. Feel free to provide
                  any specific instructions or ideas you'd like me to
                  incorporate."
        title="Todo lo que necesitas para administrar tu empresa desde un solo lugar"
        features={[
          "Gestión de proyectos",
          "Facturación electrónica",
          "Nómina por proyecto",
          "Gestión de Documentos",
          "Reportes financieros",
          "Cotizaciones Profesionales",
          "Control de inventario",
          "Registro de proveedores y clientes",
          "Cuentas por cobrar/pagar",
          "Control de materiales",
          "Control de equipos",
          
          
        ]}
        style={{ flexDirection: "row-reverse" }}
      />
      <ServiceCard
        img={img3}
        bg={bg1}
        desc="Accede a paneles con indicadores clave: rentabilidad por obra, costos por cuadrilla, materiales usados, pagos pendientes y más. Toma decisiones estratégicas con información actualizada y sin complicaciones."
        title="Toma decisiones con datos reales, no suposiciones"
        // features={[
        //   "Entering & Leaving From Country",
        //   "Country Citizenship",
        //   "Settling In Country",
        // ]}
      />
    </section>
  );
}

export default Service;
