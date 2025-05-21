import React, { useEffect, useMemo, useState } from "react";
import bg from "../../assets/img/hero/hero-bg-1.jpeg";
import dashboard from "../../assets/img/hero/dashboard-img.png";
import dashboardTwo from "../../assets/img/hero/dashboard-img-3.png";
import dashboard1 from "../../assets/img/hero/hero1.png";
import { Link } from "react-router-dom";

function Hero() {
  const content = useMemo(
    () => ["Facturación y Finanzas","Documentación de Proyectos","Cotizaciones","Nómina de Empleados", "Inventario y Compras", "Reportes Inteligentes",],
    []
  );
  const [contents, setContents] = useState("");
  const [num, setNum] = useState(0);
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    let timeOut = 100;
    if (content[num][contents.length] === " ") {
      timeOut = 0;
    } else if (content[num].length === contents.length) {
      timeOut = 3000;
      setJumping(true);
    } else {
      timeOut = 100;
      setJumping(false);
    }
    setTimeout(() => {
      if (content[num].length <= contents.length) {
        setContents("");
        if (content[num + 1]) {
          setNum(num + 1);
        } else {
          setNum(0);
        }
      } else {
        setContents(contents + content[num][contents.length]);
        if (contents.length + 1 === content[num].length) {
          setJumping(true);
        } else if (content[num][contents.length] !== " ") {
          setJumping(!jumping);
        }
      }
    }, timeOut);
  }, [contents, content, num, jumping]);
  return (
    <section
      className="aai-hero-one position-relative"
      style={{
        background: `url(${bg}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-7">
            <div className="aai-hero-one-content">
              <h1 className="aai-hero-one-title">
                Software de Gestión para Proyectos de Construcción
              </h1>
                <span className="gradient-text typing-animation aai-hero-one-title">
                  {contents}
                  <span

                    className="aai-hero-one-title"
                    style={{
                      opacity: 0,
                    }}
                  ></span>
                </span>
                <span
                  className={jumping ? "cursor aai-hero-one-title" : "aai-hero-one-title"}
                  style={{ background: "transparent", color: "white" }}
                >
                  |
                </span>
              <p className="aai-hero-one-desc">
               Administra tus proyectos, controla tu inventario, factura, 
               paga nóminas y toma decisiones con reportes automáticos. 
               Todo desde una sola plataforma diseñada para empresas constructoras.
              </p>
              <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group">
                {/* <Link to="/prices" className="aai-btn btn-pill-solid">
                  Ver más
                </Link> */}
                <Link to="/services" className="aai-gradient-outline-btn">
                  Más información
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-xl-5 mt-5 mt-lg-0">
            <div className="aai-hero-one-img">
              <img
                src={dashboard}
                className="img-fluid aai-hero-img d-none d-xl-block"
                alt=""
              />
              <img
                src={dashboardTwo}
                className="img-fluid aai-hero-img d-xl-none"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
