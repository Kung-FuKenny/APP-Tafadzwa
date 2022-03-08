import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Home</a>
            <a href="#features">&bull; About</a>
            <a href="#faq">&bull; Recruitment</a>
            <a href="#download">&bull; Target</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSePliqqVx3bKY01egx2OIPGndveTCC-D88xOwp9P1_RAXiu2g/viewform?usp=sf_link">&bull; Application</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
          <a href="https://www.facebook.com/Tafadzwa-Consulting-530892300334863/?_rdr">&bull; Facebook</a>
            <a href="https://twitter.com/tafadzwaconsult">&bull; Twitter</a>
            <a href="https://www.linkedin.com/company/tafadzwa-consulting">&bull; LinkedIn</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; : +27 11 438 4300
            </p>
            <p>
              <FaEnvelope /> &nbsp; : reception@tafadzwa.co.za
            </p>
            <p>
              <FaGlobe /> &nbsp; : www.tafadzwa.co.za
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" />
          <p className="u-text-small">&copy; Copyright 2022. <a href="webparam.co.za">Webparam</a></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
