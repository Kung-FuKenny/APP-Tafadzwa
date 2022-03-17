import React, { useState, Fragment } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

//import { SiAnaconda } from "react-icons/si";

//import logo  from "C:\Users\HP\Desktop\NEWWEB\Tafadzwa\src\assets\log.png";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import logo from "../../assets/log.png";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    
//console.log(logo);  
    
  };
  return (
  
    <nav className="navbar container" sticky="top"> 
      <div className="logo">
      <img src={logo} alt="logo"  />
        <p className="logo-text">
        <span></span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">About Us</Link>
          </li>
          <li>
            <Link to="/faq">Recruitment</Link>
          </li>
          <li>
            <Link to="/download">Target</Link>
          </li>
          <li>
            <Link to="https://t-career.vercel.app/">Career</Link>
          </li>
          <li>
            <a href="https://t-career.vercel.app/#faq/">Contact</a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#4b4586" size={30} />
        ) : (
          <AiOutlineBars color="#4b4586" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

