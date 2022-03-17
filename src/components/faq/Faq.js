import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/Footer.js";
import Download from "../download/Download.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
    <Navbar/>
    {/* <div className="imglist">
        <img 
        src="../../../public/img/back.jpg"
        alt="img1"
        width={20}
        height={20}
        />
        </div> */}
    <section id="faq">
      <div className="container-faq">
        <div className="u-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="#4b4586" size={30} />
          <h2>What About Recruitment?</h2>
          <p className="u-text-small">
          Our superlative recruitment process does not only allow us to hit our hiring goals but it also facilitates us to accomplish tasks with efeciency.
          </p>
        </div>
        <div className="questions">
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
    <Footer/>
    </>
  );
};

export default Faq;
