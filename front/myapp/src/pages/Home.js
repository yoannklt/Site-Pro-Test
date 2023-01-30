import "../css/Home.css";
import Navbarbar from "../components/Navbar";
import ScrollButton from "../components/ScrollButton";
import image9 from "../img/image9.png";
import thesense from '../img/thesense.png';
import image10 from "../img/image10.jpg";
import boutonréserver from "../img/boutonréserver.png";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import image5 from "../img/image5.png";
import image7 from '../img/image7.png';
import image8 from '../img/image8.png';
import Reservation from "../components/Reservation";
import FadeCarouselavis from "../components/Carouselavis";
import BasicExample from "../components/Dropdown";
import Footerter from "../components/Footer";


function Home() {
    return (
        <div>
            <div>
                <Navbarbar />
            </div>

            <div>
                <ScrollButton />

                <div id="Hero" className="container col col-lg-12 text-center">
                    <div className="container discoverhome">
                        <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                    </div>
                </div>

                <div className="row bandeaubleu" >
                    <div className="col-lg-4 img text-center">
                        <img className="img-fluid imgronde align-self-center" src={image9} alt="img9"></img>
                    </div>
                    <div className="col-lg-7 txt row align-items-baseline">
                        <div className="col col-lg-4 text-end h1Home">
                            <h1 className="">Qu'est-ce que</h1>
                        </div>
                        <div className="col col-lg-2">
                            <img className="img-fluid logoHome text-start" src={thesense} alt="logo the sense"></img>
                        </div>
                        <div className="col col-lg-2">
                            <p>&nbsp;?</p>
                        </div>
                    </div>
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>La réalité à portée de main</strong></h2>
                    <p>Vous rêvez de voyager, de frissoner ou tout simplement de vivre une expérience unique ? Explorez nos univers entre amis ou en famille et franchissez la frontière de la réalité. Plusieurs dimensions d'offrent à vous, vous donnant accès à de nombreuses expériences.</p>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <h3><strong>Nos expériences les plus appréciées</strong></h3>
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
                        <div className="row reservebtn text-center">
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
                        <img className="img-fluid" src={image1} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="row">
                        </div>
                        <div className="blochome">
                            <h3><strong>The conjuring exprerience</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">dark room</h3>
                        </div>
                        <div className="row parag">
                            <h4><strong>Expérience interdite aux -18</strong></h4>
                            <p>Revivez l'histoire d'un chef d'oeuvre cinématographique au travers d'une exprérience aussi bien réaliste qu'immersive. Rassemblez ce qu'il vous reste de courage, les inspecteurs Ed et Loren Warren ont besoin de vous. Un malheur hante la maison de ces derniers et vous ne pouvez pas vous en échapper sans sacrifices. serez-vous à la hauteur de ce qui vous attend ? Bonne chance, vous en aurez besoin !</p>
                        </div>
                        <div className="row reservebtn text-center">
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                            <div className="redirection col-lg-2 align-items-end">
                                <a href="/Room">découvrez la Dark room -</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image2} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="row">
                        </div>
                        <div className="blochome">
                            <h3><strong>ultimate fight</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">battle room</h3>
                        </div>
                        <div className="row parag">
                            <p>Sentez votre coeur battre, votre souffle se couper, votre concentration monter... Enrôlez des joueurs, formez votre équipe et préparez vous au combat. Arrachez la victoire à vos adversaires à travers une bataille dans des décors et des "maps" des plus immersives. En équipe de 4 ou 5 voyez lesquels d'entre vous sont dignes de remporter le trophée.</p>
                        </div>
                        <div className="row reservebtn text-center">
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                            <div className="redirection col-lg-2 align-items-end">
                                <a href="/Room">découvrez la battle room -</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container col col-lg-12">
                    <div className="row container blocimg">
                        <h3><strong>Vous en voulez toujours plus ?</strong></h3>
                        <img className="img-fluid col-lg-4" src={image3} alt="" />
                        <img className="img-fluid col-lg-4" src={image4} alt="" />
                        <img className="img-fluid col-lg-4" src={image5} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="blochome">
                            <h3><strong>Créez votre propre expérience</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">creative room</h3>
                        </div>
                        <div className="row parag">
                            <p>Vous en avez marre des expériences répétitives ? Vous êtes à la recherche d'une toute nouvelle expérience virtuelle ? Alors venez créer votre propre expérience avec notre tout nouveau système de création virtuelle ! Vous nous exposez votre idée et votre univers et nous le mettons en oeuvre rien que pour vous ! N'attendez plus, c'est désormais votre création, votre univers, votre expérience, votre SENSE.</p>
                        </div>
                        <div className="row reservebtn text-center">
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                            <div className="redirection col-lg-2 align-items-end">
                                <a href="/Room">découvrez la creative room -</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Reservation />
                </div>

                <div className="container blocnews">
                    <h3><strong>Les news du mois</strong></h3>
                </div>
                <div className="row text-center">
                    <div className="container col-lg-5">
                        <div className="container blocimgnews">
                            <img className="img-fluid" src={image7} alt="" />
                        </div>
                        <div className="container blocgrisnews">
                            <div className="row">
                            </div>
                            <h3><strong>évènement : le mystère du loup pharaon.</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
                        </div>
                    </div>
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
                </div>

                <div className="container avis">
                    <h2><strong>Qu'est-ce qui vous retiens ?</strong></h2>
                </div>

                <div className="carouselavis">
                    <FadeCarouselavis />
                </div>

                <div className="container faq">
                    <h2><strong>Foire aux questions</strong></h2>
                    <div className="question align-items-center">
                        <BasicExample />
                    </div>
                </div>

            </div>
            <Footerter />
        </div>
    )
}

export default Home;