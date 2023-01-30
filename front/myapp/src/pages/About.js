import Navbarbar from "../components/Navbar";
import Footerter from "../components/Footer";
import Contactee from "../components/Contact";
import logo from '../img/Logo.png';
import decouvrir from '../img/découvrir.png';
import image9 from '../img/image9.png';
import image74 from '../img/image74.png';
import image116 from '../img/image116.png';
import image117 from '../img/image117.png';
import image118 from '../img/image118.png';
import image119 from '../img/image119.png';

function About() {
    return (
        <div>
            <div className="backgroundabout">
                <Navbarbar />
                <div className="thesense">
                    <img src={logo} alt="logo the sense" />
                </div>
            </div>

            <div>

                <div className="container col col-lg-12 text-center">
                    <div className="container discover">
                        <a href="#About"><img className="img-fluid" src={decouvrir} alt="bouton decouvrir" /></a>
                    </div>
                </div>

                <div id="About" className="row bandeaubleu" >
                    <div className="col-lg-4 img text-center">
                        <img className="img-fluid imgronde align-self-center" src={image9} alt="img9"></img>
                    </div>
                    <div className="col-lg-7 text-left align-self-center">
                        <h3><strong>THE SENSE, une idée novatrice</strong></h3>
                        <p>THE SENSE est né d'un projet d'école de quatre étudiants en école de commerce. Se basant sur une idée originaire des Etats-Unis, les quatre amis décidèrent d'adapter ce concept inédit au marché français en y ajoutant leurs idées novatrices. Mélant deux activités attractives, la Réalité Virtuelle et les Escape Game, THE SENSE joint le meilleur des deux mondes pour vous proposer des expériences inédites et époustouflantes. N'hésitez plus et franchissez la frontière du réel.</p>
                    </div>
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>Qui sommes-nous ?</strong></h2>
                    <p>THE SENSE est une société formée par quatre étudiants de commerce qui détiennent la majorité des parts. Le restant étant la propriété DreamAway, entreprise française spécialisée du milieu de la VR.</p>
                </div>

                <div className="team container">
                <div className="characters text-center">
                        <img src={image116} alt="image116" />
                        <h3>CORDIER</h3>
                        <h3 className="turquoise">Colin</h3>
                        <h4>Co-fondateur THE SENSE et Directeur général</h4>
                        <p>"Nous avons décidé de réaliser notre rêve de gosse: rendre réel ce qui ne l'est pas."</p>
                        <p>- Colin CORDIER -</p>
                    </div>
                    <div className="characters text-center">
                        <img src={image117} alt="image117" />
                        <h3>VANBORRE</h3>
                        <h3 className="turquoise">Thibault</h3>
                        <h4>Co-fondateur THE SENSE et responsable RH</h4>
                        <p>"THE SENSE représente, pour moi, la concrétisation de 4 ans de travail et de passion."</p>
                        <p>- Thibault VANBORRE -</p>
                    </div>
                    <div className="characters text-center">
                        <img src={image119} alt="image119" />
                        <h3>URBAIN</h3>
                        <h3 className="turquoise">Eloëne</h3>
                        <h4>Co-fondateur THE SENSE et Responsable Communication</h4>
                        <p>"Je pense qu'il est important de rêver dans la vie et THE SENSE permet de vivre ces rêves."</p>
                        <p>- Eloëne URBAIN -</p>
                    </div>
                    <div className="characters text-center">
                        <img src={image118} alt="image118" />
                        <h3>ZAABAT</h3>
                        <h3 className="turquoise">Bryce</h3>
                        <h4>Co-fondateur THE SENSE et Responsable Marketing</h4>
                        <p>"THE SENSE permet à nos joueurs de vivrent une expérience époustouflantes qui les marquera longtemps. Croyez-moi."</p>
                        <p>- Bryce ZAABAT -</p>
                    </div>
                </div>

                <div className="container description col-lg-12 align-text-center">
                    <h2><strong>Où nous retrouver ?</strong></h2>
                    <p>THE SENSE se trouve, pour le moment, exclusivement à Lyon (France) dans le 3ème arrondissement. Pour nous rejoindre, il suffit de prendre le Tram ligne T2 arrêt Rue de l'Université ou bien le Métro B station Guillotière (100m à pied).</p>
                </div>

                <div className="container map text-center">
                    <div className="col col-lg-6">
                        <img src={image74} alt="map" />
                    </div>
                    <div className="col col-lg-6 align-self-center">
                        <h3><strong>Nos horaires</strong></h3>
                        <div className="horaires">
                            <div className="days">
                                <p className="red">Lundi</p>
                                <p>Mardi</p>
                                <p>Mercredi</p>
                                <p>jeudi</p>
                                <p>Vendredi</p>
                                <p>Samedi</p>
                                <p>Dimanche</p>
                            </div>
                            <div className="hours">
                                <p className="red">FERMÉ</p>
                                <p>10:00-22:00</p>
                                <p>10:00-22:00</p>
                                <p>10:00-22:00</p>
                                <p>10:00-01:00</p>
                                <p>10:00-01:00</p>
                                <p>10:00-22:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact form">
                    <Contactee />
                </div>

            </div>

            <Footerter />
        </div>
    )
}

export default About;