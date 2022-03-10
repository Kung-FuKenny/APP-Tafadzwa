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




function App() {
  return (
    <div>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features data-aos="fade-up" />
      <Faq />
      <Download />
      <MultiItemCarousel />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}

export default App;
