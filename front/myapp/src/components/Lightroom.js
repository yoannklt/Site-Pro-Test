import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import image73 from "../img/image73.png";
import lightroom from '../img/lightroom.png';
import image10 from "../img/image10.jpg";
import image14 from "../img/image14.png";
import boutonréserver from "../img/boutonréserver.png";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";
import Bandeau from "../components/Bandeau";


function Lightroom() {
    return (
        <div className="bodylight">
            <div>
                <Navbarbar />
            </div>

            <div>

                <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discoverhome">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div className="row bandeaulightroom" >
                    <Bandeau />
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>Prenez part au voyage</strong></h2>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <div>
                            <img className="img-fluid" src={image10} alt="" />
                        </div>
                    </div>
                    <div className="container bloclight">
                        <div className="blochome">
                            <h3><strong>Shangri-la : la cité perdue de z</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">light room</h3>
                        </div>
                        <div className="row parag">
                            <p>Shangri-La la cité mythique, symbole de la paix, de prospérité et de magnficence. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver son existance, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux à la recherche de Percy Fawcett.</p>
                        </div>
                        <div className="row reservebtn text-center">
                            <div className="clc col-lg-12 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <div>
                            <img className="img-fluid" src={image14} alt="" />
                        </div>
                    </div>
                    <div className="container bloclight">
                        <div className="blochome">
                            <h3><strong>Nordrënn : la légende de glace</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">light room</h3>
                        </div>
                        <div className="row parag">
                            <p>Dans le froid du royaume de Nordrënn, il est une légende qui raconte coimment un guerrier abtint la force de l'ours et la claivoyance du corbeau. il est dit que pour conquérir la femme qu'il aimait, cet homme parti à la recherce du trône d'Odin, artefact perdu depuis des années, qui offrait, disait-on, le pouvoir du Père de Toute Chose. Le guerrier parti et ne revint jamais : on raconte qu'il aurait trouvé le trône mais, qu'avide de son pouvoir il ne le quittera plus. Partez à la découverte du royaume glacé de Nordrënn et retrouvez le guerrier de la légende.</p>
                        </div>
                        <div className="row reservebtn text-center">
                            <div className="clc col-lg-12 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                        </div>
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

export default Lightroom;