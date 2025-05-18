import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/smartcontrol_logo.png";
import StickyMenu from "../../lib/StickyMenu";

function Header() {
  useEffect(() => {
    StickyMenu();
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header-primary aai-sticky">
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between">
          <Link to="/">
            <img src={logo} alt=""  width={80} height={80} style={{borderRadius: '50%'}}/>
          </Link>
          <div
            className={`collapse navbar-collapse  ${mobileMenu ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="d-block d-xl-none">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt=""  width={80} height={80} style={{borderRadius: '50%'}}/>
                  </Link>
                </div>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link "
                  to="/"
                  role="button"
              
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Sobre Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Servicios
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/services-details" className="dropdown-item">
                      <span>Service Details</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" className="dropdown-item">
                      <span>Features</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/prices" className="dropdown-item">
                      <span>Pricing</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/404" className="dropdown-item">
                      <span>404 Page</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signin" className="dropdown-item">
                      <span>Signin Page</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="dropdown-item">
                      <span>Signup Page</span>
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/blog" className="dropdown-item">
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-details" className="dropdown-item">
                      <span>Blog Details</span>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contacto
                </Link>
              </li>
            </ul>
       
          </div>
          <div className="navbar-right d-flex align-items-center gap-4">
          
            <button
              className={`navbar-toggler d-block d-xl-none ${
                mobileMenu ? "collapsed" : ""
              }`}
              onClick={() => setMobileMenu(!mobileMenu)}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={mobileMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
