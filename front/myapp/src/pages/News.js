import Navbarbar from "../components/Navbar"
import image26 from '../img/image26.png';
import image25 from '../img/image25.png';
import image7 from '../img/image7.png';
import image8 from '../img/image8.png';
import vector8 from '../img/vector8.png';
import vector9 from '../img/vector9.png';
import vector10 from '../img/vector10.png';

function News() {
    return (
        <div>
            <div className="background">
                <Navbarbar />
                <div className="news">
                    <h1>LES NEWS</h1>
                </div>
            </div>
            <div className="class">
                
                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image26} alt="img" />
                    </div>
                    <div className="container blocgris">
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
                        <div className="container blocgris">
                            <div className="row">
                            </div>
                            <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                    <div className="container col-lg-5">
                        <div className="container blocimg">
                            <img className="img-fluid" src={image8} alt="" />
                        </div>
                        <div className="container blocgris">
                            <div className="row">
                            </div>
                            <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                </div>

                <div className="container col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image25} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="row">
                        </div>
                        <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                    </div>
                </div>

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src={vector9} alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={vector8} alt="Second slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={vector10} alt="Third slide"></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default News;