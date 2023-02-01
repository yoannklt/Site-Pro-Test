import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import FadeCarousel from "../components/Carousel";
import Bandeau from "../components/Bandeau";
import BlocRoom from "../components/BlocRoom";
import Footerter from "../components/Footer";
import BookingReady from "./Booking";


function Lightroom() {
    return (
        <div className="bodylight">
            <div>
                <Navbarbar />
            </div>

            <div>

                <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discoverhome">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div className="row bandeaulightroom" >
                    <Bandeau />
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>Prenez part au voyage</strong></h2>
                </div>

                <div className="container col col-lg-12">
                    <BlocRoom />
                </div>

                <div className="container col col-lg-12">
                    <BlocRoom />
                </div>

                <div className="container col col-lg-12">
                    <BookingReady />
                </div>

                <div className="carousel">
                    <FadeCarousel />
                </div>


            </div>
            <Footerter />
        </div>
    )
}

export default Lightroom;