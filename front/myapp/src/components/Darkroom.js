import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import FadeCarousel from "../components/Carousel";
import Bandeau from "../components/Bandeau";
import BlocRoom from "../components/BlocRoom";
import Footerter from "../components/Footer";


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