import Navbarbar from "../components/Navbar";
import Footerter from "../components/Footer";
import Contactee from "../components/Contact";
import decouvrir from '../img/découvrir.png';
import btob1 from '../img/btob1.png';
import btob2 from '../img/btob2.png';
import btob3 from '../img/btob3.png';
import image146 from '../img/image146.png';


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
                    <div className="container discover">
                        <a href="#Btob"><img className="img-fluid" src={decouvrir} alt="bouton decouvrir" /></a>
                    </div>
                </div>

                <div id="Btob" className="row bandeaubleu" >
                   <div className ="col-lg-4 img text-center">
                        <img className="img-fluid imgronde align-self-center" src={image146} alt="img146"></img>
                   </div>
                   <div className="col-lg-7 text-left align-self-center">
                        <h3><strong>THE SENSE POUR LES PROFESSIONNELS</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                   </div>
                </div>

                <div className="col-lg-12 align-text-center txtes"> 
                    <h3><strong>AU SERVICE DES PROFESSIONNELS</strong></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. </p>
                </div>
                
                
                <div className="troiscase">
                    <div className="row bob1">
                        <div className="container col-lg-5 img text-center ">
                            <img className="img-fluid btob2 align-self-center" src={btob2} alt="img8" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center txt">
                            <h3><strong>POUR LE SECTEUR DU BÂTIMENT</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                    <div className="row bob2">
                        <div className="col-lg-7 text-left align-self-center txt">
                            <h3><strong>POUR LE SECTEUR COMMERCIAL</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                        <div className="container col-lg-5 img text-center">    
                            <img className="img-fluid btob1 align-self-center" src={btob1} alt="image25" />
                        </div>
                    </div>
                    <div className="row bob3">
                        <div className="container col-lg-5 img text-center">
                            <img className="img-fluid btob3 align-self-center" src={btob3} alt="img8" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center txt">
                            <h3><strong>POUR LES INGÉNIEURS</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                </div>   
                <div className="col-lg-12 align-text-center txtes">
                    <h3><strong>NOS SERVICES DÉDIÉS AUX PROFESSIONNELS VOUS INTÉRESSE ?</strong></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. </p>
                </div>
                <div className="contact form">
                    <Contactee/>
                </div>
            </div>
            <Footerter/>
        </div>
    )
}

export default BtoB;