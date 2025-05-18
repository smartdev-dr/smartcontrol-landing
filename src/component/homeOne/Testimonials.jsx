import React from "react";
import ProtoTypes from "prop-types";
import bg from "../../assets/img/bg/testimonial-bg.jpeg";
import Slider from "../common/Slider";
import TestimonialCard from "../cards/TestimonialCard";
import authorImg from "../../assets/img/avatar/av-5.png";
import authorImg2 from "../../assets/img/avatar/av-6.png";
import authorImg3 from "../../assets/img/avatar/av-7.png";
import authorImg4 from "../../assets/img/avatar/av-8.png";

function Testimonials({ className }) {
  return (
    <section
      className={`aai-testimonials pb-120 ${className}`}
      style={{ background: `url(${bg}) no-repeat center center/cover` }}
    >
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <div className="aai-section-title mb-3 text-center mb-5">
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          </div>
        </div>
      </div>

      <Slider
        spaceBetween={30}
        centeredSlides={true}
        className="testimoniaslSlider mb-4"
        freeMode={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        allowTouchMove={false}
        breakpoints={{
          1: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3.5,
          },
          1600: {
            slidesPerView: 4,
          },
          1900: {
            slidesPerView: 4.5,
          },
        }}
      >
        <TestimonialCard
          desc="Antes llevábamos todo en Excel y papeles. Ahora tenemos control total de cada obra, desde compras hasta pagos. Hemos ahorrado tiempo y dinero."
          authorName="Luis Méndez,"
          authorDesc="Gerente de Proyectos, Constructora M&E"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="Lo que más me gusta es la facilidad para generar reportes. En segundos veo cuánto ganamos o perdimos por proyecto. Es una herramienta clave para tomar decisiones."
          authorName="Karla Espina"
          authorDesc="Directora Financiera, Grupo Firmecon"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="Implementamos el sistema en solo 2 días. Ahora tenemos toda la info centralizada: personal, materiales, pagos y facturas. Muy recomendable para obras medianas o grandes."
          authorName="José Rosario"
          authorDesc="Ingeniero Residente, IngeNova SRL"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="Con el módulo de inventario evitamos pérdidas por materiales mal gestionados. Todo se actualiza en tiempo real desde el sitio."
          authorName="Ana Liriano"
          authorDesc="Encargada de Compras, Proyectos Alfil"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="Con este software dejamos atrás los errores en las nóminas. Cada obrero cobra según su obra y horario. Todo automático."
          authorName="Carmen Peña"
          authorDesc="Encargada de Nómina, Constructora Eficonsa"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="La curva de aprendizaje fue rápida. En menos de una semana ya todos en la empresa lo estábamos usando sin problema."
          authorName="Felipe Cabrera"
          authorDesc="Director de Operaciones"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="Llevar el control de las cuentas por cobrar nunca había sido tan fácil. Me avisa quién debe y cuánto, sin tener que buscar en hojas de cálculo."
          authorName="Paola Jiménez"
          authorDesc="Auxiliar Contable"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="Ahora puedo ver desde el celular si una obra va bien o no. Eso antes me tomaba llamadas, correos y hojas sueltas."
          authorName="Jonathan Mejía"
          authorDesc="Supervisor General de Obras"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="Nos ayudó a eliminar el papeleo. Las órdenes de compra y pagos se aprueban en línea y quedan registrados con respaldo."
          authorName="Sandra Moreno"
          authorDesc="Administradora de Proyectos"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="Por fin un sistema que entiende cómo funciona una constructora. No es genérico como otros que probamos. Este sí está hecho para nosotros."
          authorName="Ramón Díaz"
          authorDesc="Director de Operaciones"
          authorImg={authorImg}
        />
      </Slider>
      {/* <Slider
        spaceBetween={30}
        centeredSlides={true}
        className="testimoniaslSliderTwo"
        freeMode={true}
        speed={8000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        allowTouchMove={false}
        breakpoints={{
          1: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3.5,
          },
          1600: {
            slidesPerView: 4,
          },
          1900: {
            slidesPerView: 4.5,
          },
        }}
      >
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Kristin Watson"
          authorDesc="Medical Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Brooklyn Simmons"
          authorDesc="President of Sales"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Annette Black"
          authorDesc="Nursing Assistant"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Floyd Miles"
          authorDesc="Dog Trainer"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Esther Howard"
          authorDesc="Nursing Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Kristin Watson"
          authorDesc="Medical Assistant"
          authorImg={authorImg}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Brooklyn Simmons"
          authorDesc="President of Sales"
          authorImg={authorImg2}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Annette Black"
          authorDesc="Nursing Assistant"
          authorImg={authorImg3}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Floyd Miles"
          authorDesc="Dog Trainer"
          authorImg={authorImg4}
        />
        <TestimonialCard
          desc="They not only understand what I say but read between the lines and also give me ideas of my own."
          authorName="Esther Howard"
          authorDesc="Nursing Assistant"
          authorImg={authorImg}
        />
      </Slider> */}
    </section>
  );
}
Testimonials.propTypes = {
  className: ProtoTypes.string,
};
export default Testimonials;
