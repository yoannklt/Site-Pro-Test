import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import image68 from "../img/image68.png";
import battleroom from '../img/battleroom.png';
import image2 from "../img/image2.png";
import image13 from "../img/image13.png";
import boutonréserver from "../img/boutonréserver.png";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";
import Bandeau from "../components/Bandeau";
import BlocRoom from "../components/BlocRoom";


function Battleroom() {
    return (
        <div className="bodybattle">
            <div>
                <Navbarbar />
            </div>

            <div>

                <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discoverhome">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div className="row bandeaubattle" >
                    <Bandeau />
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>Défiez vos adversaires</strong></h2>
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

export default Battleroom;