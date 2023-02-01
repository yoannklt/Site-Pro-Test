import "../css/Room.css";
import Navbarbar from "../components/Navbar";
import image72 from "../img/image72.png";
import creativeroom from '../img/creativeroom.png';
import darkroom from "../img/darkroomback.png";
import lightroom from "../img/lightroomback.png";
import battleroom from "../img/battleroomback.png";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";
import aleatoire from "../img/aleatoire.png"


function Creativeroom() {
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

                <div className="row bandeaucrea" >
                    <div className="col-lg-4 img text-center">
                        <img className="img-fluid imgrondecrea align-self-center" src={image72} alt="img9"></img>
                    </div>
                    <div className="col-lg-7 txt row align-items-center textebottom">
                            <h3 className="">Qu'est-ce que la
                                <img className="img-fluid logoHome text-start" src={creativeroom} alt="the sense" />
                                &nbsp;?
                            </h3> 
                            <p>Notre catalogue ne vous suffit pas ? Vous aimeriez laisser parler votre imagination ? Grâce à la CREATIVE ROOM, concept inédit en France, la créativité est votre seule limite, créez de toute pièce l'univers dans lequel vous voyagerez par la suite. Que ce soit dans la jungle ou en haut de montagnes enneigées, pour affronter des démons ou enquêter sur la disparition de bébés licornes roses fluos, le choix vous appartient. Alors tester votre imagination dans la CREATIVE ROOM et entraîner vos amis ou votre famille dans votre univers.</p>
                    </div>
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>VOTRE EXPÉRIENCE ENTRE VOS MAINS</strong></h2>
                    <p>Suivez les étapes pour créer votre propre aventure. Nous mettons à votre disposition la possibilité de choisir tous les éléments de votre room dans le but de vous offrir l’expérience ultime qui VOUS correspond. Basculez entre chaque étape, modifier vos choix à tout moment pour que ceux-ci correspondent à vos besoins.</p>
                </div>

                <div id="accordion toi">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <img className="img-fluid darkback text-start" src={darkroom} alt="the sense" />
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">                              
                                <img className="img-fluid darkback text-start" src={lightroom} alt="the sense" />
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <img className="img-fluid darkback text-start" src={battleroom} alt="the sense" />
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>OU CONFIEZ VOTRE DESTIN AU HASARD</strong></h2>
                    <p>Vous pensez pouvoir tout affronter sans problème, laisser le hasard décider de votre room et choisissez simplement la difficulté.</p>
                </div>

                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <img className="img-fluid aleatoire text-start" src={aleatoire} alt="the sense" />
                            </button>
                        </h5>
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
