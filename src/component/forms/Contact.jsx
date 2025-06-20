import { useState } from "react";
import contact1 from "../../assets/img/icons/contact-1.svg";
import contact2 from "../../assets/img/icons/contact-2.svg";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Solicitar demo de SmartControl",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://smartdev.com.do/api/onboarding/smartcontrol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: form?.fullname || '',
          email: form?.email || '',
          phone: form?.phone || '',
          message: form?.message || '',
          }),
      });
    
      alert("Solicitud enviada, nos pondremos en contacto con usted en breve.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      
    }finally{
      setSubmitted(true);
    }
    

  };

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
                      <img src={contact2} alt="cts" />
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                      <h3 className="aai-contact-widget-title">Información de <br/>contacto</h3>
                      {/* <p className="aai-contact-support">
                      Correo electrónico:
                      </p> */}
                   
                    </div>
                    
                  </div>
              <div style={{padding:'10px', display: 'flex',
                justifyContent:'center'
              }}>
                     <a ma className="aai-contact-address">
                       contact@smartcontrol.com.do
                      </a>
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
                      onChange={handleChange}
                      value={form.fullname}
                      name="fullname"
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Nombre de contacto"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="aai-form-input">
                      <input
                      onChange={handleChange}
                      value={form.email}
                      name="email"
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Correo electrónico"
                      />
                    </div>
                  </div>
                   <div className="col-full">
                    <div className="aai-form-input">
                      <input
                      onChange={handleChange}
                      value={form.phone}
                      name="phone"
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Telefono o celular de contacto"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="aai-form-input">
                      <textarea
                      onChange={handleChange}
                      value={form.message}
                      name="message"
                        className="form-control shadow-none text-area"
                        placeholder="Mensaje"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="d-flex justify-content-start">
                      <button className="aai-btn btn-pill-solid" type="button"
                      onClick={handleSubmit}
                      >
                    Solicitar demo
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
