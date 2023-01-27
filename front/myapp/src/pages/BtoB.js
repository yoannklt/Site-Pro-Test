import Navbarbar from "../components/Navbar";
import decouvrir from '../img/découvrir.png';
import btob1 from '../img/btob1.png';
import btob2 from '../img/btob2.png';
import btob3 from '../img/btob3.png';
import Container from 'react-bootstrap/Container';
import image146 from '../img/image146.jpg';

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
                
                <div className="container col col-lg-12 text-center">
                    <div className="container blocimg discover">
                        <a href="#Btob"><img className="img-fluid" src={decouvrir} alt="bouton decouvrir" /></a>
                    </div>
                </div>

                <div className="row bob" id="Btob">
                   <div className ="col-lg-5 img text-center">
                        <img className="img-fluid img146 align-self-center" src={image146} alt="img146"></img>
                   </div>
                   <div className="col-lg-7 text-left align-self-center txt">
                        <h3><strong>THE SENSE POUR LES PROFESSIONNELS</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                   </div>
                </div>

                <div className="col-lg-12 align-text-center">
                    <h3><strong>AU SERVICE DES PROFESSIONNELS</strong></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. </p>
                </div>
                
                <Container fluid="xxl">
                    <div className="row bob">
                        <div className="container col-lg-5 img text-center">
                            <img className="img-fluid btob2 align-self-center" src={btob2} alt="img8" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center txt">
                            <h3><strong>POUR LE SECTEUR DU BÂTIMENT</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                    <div className="row bob">
                        <div className="col-lg-7 text-left align-self-center txt">
                            <h3><strong>POUR LE SECTEUR COMMERCIAL</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                        <div className="container col-lg-5 img text-center">    
                            <img className="img-fluid btob1 align-self-center" src={btob1} alt="image25" />
                        </div>
                    </div>
                    <div className="row bob">
                        <div className="container col-lg-5 img text-center">
                            <img className="img-fluid btob3 align-self-center" src={btob3} alt="img8" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center txt">
                            <h3><strong>POUR LES INGÉNIEURS</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                
                </Container>
            </div>
        </div>
    )
}

export default BtoB;