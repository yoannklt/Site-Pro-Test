import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import image67 from "../img/image67.png";
import darkroom from '../img/darkroom.png';
import image1 from "../img/image1.png";
import image12 from "../img/image12.png";
import boutonréserverXL from "../img/boutonréserverXL.png";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";


function Darkroom() {
    return (
        <div>
            <div>
                <Navbarbar />
            </div>

            <div>

                <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discoverhome">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div className="row bandeaudark" >
                    <div className="col-lg-4 img text-center">
                        <img className="img-fluid imgrondedark align-self-center" src={image67} alt="img9"></img>
                    </div>
                    <div className="col-lg-7 txt row align-items-center textebottom">
                            <h3 className="">Qu'est-ce que la
                                <img className="img-fluid logoHome text-start" src={darkroom} alt="logo the sense" />
                                &nbsp;?
                            </h3> 
                            <p>Vous pensez ne pas avoir peur du noir ? Que rien ne pourra vous effrayer ? Vous avez tord. Avec la DARK ROOM, toutes vos peurs deviendront réelles et en rien de temps, il ne vous restera plus que vos jambes pour vous enfuir. Vous vous penser suffisamment fort pour affronter vos peurs ? Franchissez donc le seuil de la DARK ROOM. Vous avez hâte d’y entrer mais dans le noir... Personne ne vous verra mourir. *Les expériences proposées dans cette salle ne conviennent pas à un public mineur ou sensible.</p>
                    </div>
                </div>

                <div className="container descriptiondark col-lg-12 align-text-center">
                    <h2><strong>Rêveillez la peur qui sommeille en vous</strong></h2>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image1} alt="" />
                    </div>
                    <div className="container blocdark">
                        <div className="row">
                        </div>
                        <div className="blochome">
                            <h3><strong>The conjuring exprerience</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">dark room</h3>
                        </div>
                        <div className="row paragdark">
                            <h4><strong>Expérience interdite aux -18</strong></h4>
                            <p>Revivez l'histoire d'un chef d'oeuvre cinématographique au travers d'une exprérience aussi bien réaliste qu'immersive. Rassemblez ce qu'il vous reste de courage, les inspecteurs Ed et Loren Warren ont besoin de vous. Un malheur hante la maison de ces derniers et vous ne pouvez pas vous en échapper sans sacrifices. serez-vous à la hauteur de ce qui vous attend ? Bonne chance, vous en aurez besoin !</p>
                        </div>
                        <div className="row reservebtn text-center">
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserverXL} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image12} alt="" />
                    </div>
                    <div className="container blocdark">
                        <div className="row">
                        </div>
                        <div className="blochome">
                            <h3><strong>Nameless</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">dark room</h3>
                        </div>
                        <div className="row paragdark">
                            <h4><strong>Expérience interdite aux -18</strong></h4>
                            <p>De retour de soirée avec vos amis, votre voiture tombe soudainement en panne au beau milieu des bois. Coïncidence, c’est dans cette forêt que l’on a signalé de mystérieuses disparitions. Après un long moment à tenter d’appeller une dépanneuse, vous vous rendez compte que vous ne pouvez compter que sur vous-même pour vous en sortir. Mais dans le froid de la nuit et les recoins de la forêt, quelque chose rôde. Travaillez en équipe car sans vos amis, vous n’aurez aucune chance, survivrez-vous assez longtemps ?</p>
                        </div>
                        <div className="row reservebtn text-center">
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserverXL} alt="" /></a>
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

export default Darkroom;