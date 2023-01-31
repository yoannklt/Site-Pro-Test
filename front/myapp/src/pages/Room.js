import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";
import Navbarbar from "../components/Navbar";
import ScrollButton from "../components/ScrollButton";
import Lightroom from "../components/Lightroom";
import Darkroom from "../components/Darkroom";


function Room() {
    return (
        <div>
            <Navbarbar/>
            <div className="">
                <ScrollButton/>
                <Darkroom />


                <div className="carouselavis">
                    <FadeCarousel/>
                </div>
            </div>
            <Footerter />
        </div>
    )
}

export default Room;