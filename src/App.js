//import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import MultiItemCarousel from "./MultiItemCarousel";
//import Slider from './silder';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/home/home";
import Features from './components/features/Features';
import Welcome from "./components/welcome";

import {
  Navbar,
  Header,
  Download,
  Career,
  Contact,
  Faq,
  Footer,
} from "./components";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/features' element={<Features />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/download' element={<Download />} />
        <Route exact path='/career' element={< Career />}/>
        <Route exact path='/contact' element={< Contact />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
