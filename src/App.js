//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MultiItemCarousel from "./MultiItemCarousel";
//import Slider from './silder';
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
//import Features1 from "./components/features/Features1";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";

import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";
import {
	BrowserRouter as Router,
  Routes,
	Route,
	Link
} from 'react-router-dom';




function App() {
  return (
    <div className='app'>  
    {/* <Header/> */}
    <Features data-aos="fade-up" />
    </div>
    // <div>
    //   <header className="header-bg">
    //     <Navbar />
    //     <Header />
    //   </header>
    //   <Features data-aos="fade-up" />
    //   <Faq />
    //   <Download />
    //   <MultiItemCarousel />
    //   {/* <Subscribe /> */}
    //   <Footer />
    // </div>
  );
}

export default App;
