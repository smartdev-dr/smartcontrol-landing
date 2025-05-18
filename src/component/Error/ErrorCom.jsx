import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/img/others/error-vect.svg";

function ErrorCom() {
  return (
    <section className="aai-error pt-100 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <img src={error} className="img-fluid" alt="" />
            </div>
            <div className="text-center mt-5">
              <h2 className="section-title">Oops! Page not found.</h2>
              <div className="mt-5 d-flex flex-column justify-content-center flex-md-row aai-btns-group">
                <Link to="/" className="aai-btn btn-pill-solid">
                  Back To Home
                </Link>
                <Link
                  to="/contact"
                  className="aai-btn aai-gradient-outline-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorCom;
