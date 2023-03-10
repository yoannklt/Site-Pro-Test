import "../css/BtoB.css";
import Navbarbar from "../components/Navbar";
import Footerter from "../components/Footer";
import Contactee from "../components/Contact";


function BtoB() {
    return (
        <div className="bodybtob">
            <div className="backgroundbtob">
                <Navbarbar />
                <div className="btob">
                    <h1>NOS SERVICES B TO B</h1>
                </div>
            </div>

            <div>
                
            <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discover">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div id="Btob" className="row bandeau" >
                   <div className ="col-lg-4 img text-center">
                        <img className="img-fluid imground align-self-center" src="../img/image146.png" alt="the sense"></img>
                   </div>
                   <div className="col-lg-7 text-left align-self-center">
                        <h3><strong>THE SENSE POUR LES PROFESSIONNELS</strong></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                   </div>
                </div>

                <div className="container description col-lg-12 align-text-center"> 
                    <h3><strong>AU SERVICE DES PROFESSIONNELS</strong></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. </p>
                </div>

                <div className="troiscase">
                    <div className="row blocbtob">
                        <div className="container col-lg-5 img text-center">
                            <img className="img-fluid align-self-center" src="../img/btob2.png" alt="the sense" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center blocbleu">
                            <h3><strong>POUR LE SECTEUR DU BÂTIMENT</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                    <div className="row blocbtob">
                        <div className="col-lg-7 text-left align-self-center blocbleu">
                            <h3><strong>POUR LE SECTEUR COMMERCIAL</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                        <div className="container col-lg-5 img text-center">    
                            <img className="img-fluid align-self-center" src="../img/btob1.png" alt="the sense" />
                        </div>
                    </div>
                    <div className="row blocbtob">
                        <div className="container col-lg-5 img text-center">
                            <img className="img-fluid align-self-center" src="../img/btob3.png" alt="the sense" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center blocbleu">
                            <h3><strong>POUR LES INGÉNIEURS</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
                </div> 

                <div className="container description col-lg-12 align-text-center"> 
                    <h3><strong>Nos Services dédiés aux professionnels vous intéresse ?</strong></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. </p>
                </div>

                <div className="contact">
                    <Contactee/>
                </div>

            </div>
            <Footerter/>
        </div>
    )
}

export default BtoB;