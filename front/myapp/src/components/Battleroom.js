import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import image68 from "../img/image68.png";
import battleroom from '../img/battleroom.png';
import image2 from "../img/image2.png";
import image13 from "../img/image13.png";
import boutonréserver from "../img/boutonréserver.png";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";


function Battleroom() {
    return (
        <div className="bodybattle">
            <div>
                <Navbarbar />
            </div>

            <div>

                <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discoverhome">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div className="row bandeaubattle" >
                    <div className="col-lg-4 img text-center">
                        <img className="img-fluid imgrondebattle align-self-center" src={image68} alt="img9"></img>
                    </div>
                    <div className="col-lg-7 txt row align-items-center textebottom">
                            <h3 className="">Qu'est-ce que la
                                <img className="img-fluid logoHome text-start" src={battleroom} alt="logo the sense" />
                                &nbsp;?
                            </h3> 
                            <p>Vous cherchez à connaitre qui est le meilleur dans la famille ou qui fera le S.A.M ce soir ? Venez régler vos comptes dans la BATTLE ROOM par équipe de 1 à 4 joueurs soit 8 joueurs au maximum. Au travers de nos différents modes de jeux, prouvez votre courage et montrez qu’au reste du monde que vous êtes le meilleur. Battez tous les records, faites ressortirvotre côté compétitif et pas de quartier ! N'attendez plus et rejoignez l’arène, pour prouver que vous serez le prochain champion de THE SENSE.</p>
                    </div>
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>Défiez vos adversaires</strong></h2>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <div>
                            <img className="img-fluid" src={image2} alt="" />
                        </div>
                    </div>
                    <div className="container blocbattle">
                        <div className="blochome">
                            <h3><strong>ultimate fight</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">battle room</h3>
                        </div>
                        <div className="row parag">
                            <p>Sentez votre coeur battre, votre souffle se couper, votre concentration monter... Enrôlez des joueurs, formez votre équipe et préparez vous au combat. Arrachez la victoire à vos adversaires à travers une bataille dans des décors et des "maps" des plus immersives. En équipe de 4 ou 5 voyez lesquels d'entre vous sont dignes de remporter le trophée.</p>
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
                            <img className="img-fluid" src={image13} alt="" />
                        </div>
                    </div>
                    <div className="container blocbattle">
                        <div className="blochome">
                            <h3><strong>GARDEN WAR</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">light room</h3>
                        </div>
                        <div className="row parag">
                            <p>Partez au front, avec vos amis ou votre famille, découvrez un univers certes plus cartoonesque mais ne vous y méprenez pas, vos ennemies vous attendent. Vous avez pour objectifs de remporter les batailles ! Munissez vous de vos plus fidèles soldats et partez en guerre. Cette expérience en équipe de 4-5 joueurs vous propose de découvrir l'univers cartoonesque mais compétitif de notre nouvelle room. Qu'attendez-vous soldat ?.</p>
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

export default Battleroom;