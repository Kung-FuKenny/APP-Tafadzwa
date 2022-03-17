import React, { useEffect } from "react";
import "./career.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
      <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Careers</span>
          </h1>
          <p className="u-text-small">
            Tafadzwa Consulting believes in excellence. Our speciality is connecting success-driven people with organisations that will implement discipline for results to be executed. Take a look at some of the career opportunities available below:
          </p>
          <div className="header-cta">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#grids"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
        </div>
      </div>
      <div className="floating-icon">
        <a href="#grids">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Career;
