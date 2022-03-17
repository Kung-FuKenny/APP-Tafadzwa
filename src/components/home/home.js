//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MultiItemCarousel from "../../MultiItemCarousel";
//import Slider from './silder';
import "../../App.css";


import {
    Navbar,
    Header,
    Features,
    Download,
    Subscribe,
    Faq,
    Footer,
} from "../../components";




function Home() {
    return (
        <div>
                <Header />
                <Features data-aos="fade-up" />
            <Faq />
            <Download />
            <MultiItemCarousel />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default Home;
