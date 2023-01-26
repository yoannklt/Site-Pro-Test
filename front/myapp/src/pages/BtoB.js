import Navbarbar from "../components/Navbar";
import decouvrir from '../img/découvrir.png';
import image25 from '../img/image25.png';
import image146 from '../img/image146.jpg';
import image8 from '../img/image8.png';

function BtoB() {
    return (
        <div className="fond">
            <div className="backgroundBtoB">
                <Navbarbar />
                <div className="btob">
                    <h1>NOS SERVICES B TO B</h1>
                </div>
            </div>
            <div className="class">
                
                <div className="container col col-lg-12">
                    <div className="container blocimg discover">
                        <a href="/News"><img className="img-fluid" src={decouvrir} alt="bouton decouvrir" /></a>
                    </div>
                </div>

                <div className="row bob">
                   <div className ="col-lg-6 img">
                        <img className="img-fluid img146" src={image146} alt="img146"></img>
                   </div>
                   <div className="col-lg-6 txt">
                        <h3><strong>THE SENSE POUR LES PROFESSIONNELS</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                   </div>
                </div>

                
                <div className="container col-lg-12">
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

            </div>
        </div>
    )
}

export default BtoB;