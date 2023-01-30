import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";
import Navbarbar from "../components/Navbar";
import ScrollButton from "../components/ScrollButton";
import image73 from "../img/image73.png";
import logoHome from "../img/lightroom.png";
import boutonréserver from "../img/boutonréserver.png";
import image10 from "../img/image10.jpg"

function Room() {
    return (
        <div>
            <Navbarbar/>
            <div className="">
                <ScrollButton/>
                <div className="row text-center">
                    <div className="col col-lg-12 hero" id="hero">
                    </div>
                    <div className="col col-lg-12">
                        <a href="#home"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div id="home" className="row Bob align-items-start">
                    <div className="col-lg-5 img text-center ">
                        <img className="img-fluid image9 align-self-center" src={image73} alt="img9"></img>
                    </div>
                    <div className="col-lg-7 txt row align-items-baseline">
                        <div className="col col-lg-4 text-end h1Home">
                            <h1 className="">Qu'est-ce que</h1>
                        </div>
                        <div className="col col-lg-2">
                            <img className="img-fluid logoHome text-start" src={logoHome} alt="logo the sense"></img>
                        </div>
                        <div className="col col-lg-2">
                            <p>&nbsp;?</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2><strong>PRENEZ PART AU VOYAGE</strong></h2>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image10} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="blochome">
                            <h3><strong>Shangri-la : la cité perdue de z</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">light room</h3>
                        </div>
                        <div className="row parag">
                            <p>Shangri-La la cité mythique, symbole de la paix, de prospérité et de magnficence. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver son existance, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux à la recherche de Percy Fawcett.</p>
                        </div>
                        <div className="row reserve text-center">
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                            <div className="redirection col-lg-2 align-items-end">
                                <a href="/Room">découvrez la Light room -</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image10} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="blochome">
                            <h3><strong>Shangri-la : la cité perdue de z</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">light room</h3>
                        </div>
                        <div className="row parag">
                            <p>Shangri-La la cité mythique, symbole de la paix, de prospérité et de magnficence. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver son existance, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux à la recherche de Percy Fawcett.</p>
                        </div>
                        <div className="row reserve text-center">
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                            <div className="redirection col-lg-2 align-items-end">
                                <a href="/Room">découvrez la Light room -</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="carouselavis">
                    <FadeCarousel/>
                </div>
            </div>
            <Footerter />
        </div>
    )
}
export default Room;