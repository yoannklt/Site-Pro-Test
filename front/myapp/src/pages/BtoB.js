import FadeCarousel from "../components/Carousel";
import Navbarbar from "../components/Navbar";
import image26 from '../img/image26.png';
import image25 from '../img/image25.png';
import image7 from '../img/image7.png';
import image8 from '../img/image8.png';

function BtoB() {
    return (
        <div>
            <div className="backgroundBtoB">
                <Navbarbar />
                <div className="news">
                    <h1>BTOB</h1>
                </div>
            </div>
            <div className="class">
                
                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image26} alt="img26" />
                    </div>
                    <div className="container blocgrisnews">
                        <div className="row">
                        </div>
                        <h3><strong>évènement : la légende du père noël</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="container col-lg-5">
                        <div className="container blocimg">
                            <img className="img-fluid" src={image7} alt="rg" />
                        </div>
                        <div className="container blocgrisnews">
                            <div className="row">
                            </div>
                            <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                    <div className="container col-lg-5">
                        <div className="container blocimgnews">
                            <img className="img-fluid" src={image8} alt="" />
                        </div>
                        <div className="container blocgrisnews">
                            <div className="row">
                            </div>
                            <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                </div>

                <div className="container col-lg-12">
                    <div className="container blocimgnews">
                        <img className="img-fluid" src={image25} alt="" />
                    </div>
                    <div className="container blocgrisnews">
                        <div className="row">
                        </div>
                        <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                    </div>
                </div>
                <div className="carousel">
                    <FadeCarousel/>
                </div>

            </div>
        </div>
    )
}

export default BtoB;