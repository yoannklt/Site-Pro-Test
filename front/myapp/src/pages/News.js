import "../css/News.css";
import Navbarbar from "../components/Navbar";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";

function News() {
    return (
        <div className="bodynews">
            <div className="backgroundnews">
                <Navbarbar />
                <div className="news">
                    <h1>LES NEWS</h1>
                </div>
            </div>

            <div>

                <div className="container col col-lg-12 blocnews">
                    <div className="container blocimgnews">
                        <img className="img-fluid" src="../img/image26.png" alt="the sense" />
                    </div>
                    <div className="container blocgrisnews">
                        <div className="row">
                        </div>
                        <h3><strong>évènement : la légende du père noël</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                    </div>
                </div>

                <div className="row text-center blocnews">
                    <div className="container col-lg-5">
                        <div className="container blocimgnews">
                            <img className="img-fluid" src="../img/image7.png" alt="the sense" />
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
                            <img className="img-fluid" src="../img/image8.png" alt="the sense" />
                        </div>
                        <div className="container blocgrisnews">
                            <div className="row">
                            </div>
                            <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                </div>

                <div className="container col-lg-12 blocnews">
                    <div className="container blocimgnews">
                        <img className="img-fluid" src="../img/image25.png" alt="the sense" />
                    </div>
                    <div className="container blocgrisnews">
                        <div className="row">
                        </div>
                        <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                    </div>
                </div>

                <div className="carousel">
                    <FadeCarousel />
                </div>

            </div>
            <Footerter />
        </div>
    )
}

export default News;