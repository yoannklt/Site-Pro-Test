import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";
import Navbarbar from "../components/Navbar";
import ScrollButton from "../components/ScrollButton";
import Lightroom from "../components/Lightroom";


function Room() {
    return (
        <div>
            <Navbarbar/>
            <div className="">
                <ScrollButton/>
                <Lightroom />


                <div className="carouselavis">
                    <FadeCarousel/>
                </div>
            </div>
            <Footerter />
        </div>
    )
}
export default Room;