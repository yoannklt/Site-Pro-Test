import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import image67 from "../img/image67.png";
import darkroom from '../img/darkroom.png';
import image1 from "../img/image1.png";
import image12 from "../img/image12.png";
import boutonréserverXL from "../img/boutonréserverXL.png";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";
import Bandeau from "../components/Bandeau";
import BlocRoom from "../components/BlocRoom";


function Darkroom() {
    return (
        <div>
            <div>
                <Navbarbar />
            </div>

            <div>

                <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discoverhome">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div className="row bandeaudark" >
                    <Bandeau />
                </div>

                <div className="container descriptiondark col-lg-12 align-text-center">
                    <h2><strong>Rêveillez la peur qui sommeille en vous</strong></h2>
                </div>

                <div className="container col col-lg-12">
                    <BlocRoom />
                </div>

                <div className="container col col-lg-12">
                    <BlocRoom />
                </div>

                <div className="carousel">
                    <FadeCarousel />
                </div>

            </div>
            <Footerter />
        </div>
    )
}

export default Darkroom;