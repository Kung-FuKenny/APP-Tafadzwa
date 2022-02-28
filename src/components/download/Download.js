import React, { useEffect } from "react";
import "./Download.css";
//import { FaApple, FaWindows } from "react-icons/fa";
//import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2> OUR INDUSTRY FOCUS</h2>
        <p className="u-text-small">
          These are the organisations we primarily focus on.
        </p>
        <div value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <h3><p>Medical Aid and Healthcare Funding</p></h3>
            </div>
            <div className="download-icon">
            <h3><p>Financial Services</p></h3>
            </div>
            <div className="download-icon">
            <h3><p>Parastatals and Public Sectors</p></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
