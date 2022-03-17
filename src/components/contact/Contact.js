import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import map from "../../assets/map.png";
import "./Contact.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p className="u-text-small">
          Tel: +27 11 438 4300
          </p>
          <p className="u-text-small">
          Fax: +27 86 535 8624
          </p>
          <p className="u-text-small">
          Email: reception@tafadzwa.co.za
          </p>
          <div className="u-title" data-aos="fade-up">
          
          </div> 
        </div>
        <div className="map" data-aos="fade-left">
          <img src={map} alt="map" height={290} width={360} margin={1} />
          </div>
        <div className="questions" data-aos="fade-right">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
