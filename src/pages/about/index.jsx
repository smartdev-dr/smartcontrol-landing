import React from "react";
import Breadcrumb from "../../component/common/Breadcrumb";
import Service from "../../component/about/Service";
import Faq from "../../component/homeOne/Faq";
import Cta from "../../component/homeOne/Cta";

function About() {
  return (
    <>
      <Breadcrumb title="Sobre Nosotros" />
      <Service />
      <Faq />
      <Cta />
    </>
  );
}

export default About;
