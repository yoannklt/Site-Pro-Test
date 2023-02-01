import "../css/Equipements.css";
import Navbarbar from "../components/Navbar";
import FadeCarousel from "../components/Carousel";
import Footerter from "../components/Footer";


function Equipement() {
    return (
        <div className="bodyaquipe">
            <div className="backgroundequipe">
                <Navbarbar />
                <div className="btob">
                    <h1>NOS ÉQUIPEMENTS</h1>
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
                        <img className="img-fluid imground align-self-center" src="../img/image121.png" alt="the sense"></img>
                   </div>
                   <div className="col-lg-7 text-left align-self-center">
                        <h3><strong>la vr, une affaire d'excellence</strong></h3>
                        <p>Pour une expérience aussi bien virtuelle que réelle nous avons besoin d'équipements de hautes qualités prêt à vous suivre là où vous irez ! Pour nous, la garantie d'une expérience réussie passe forcément par la qualité de notre matériel. C'est pourquoi nous cherchons constamment les dernières technologies sur le marché pour pouvoir vous proposer le meilleur de la Réalité Virtuelle. Nous travaillons également directement avec les marques leaders du marchés pour vous proposer du matériels adaptés à vos besoins (Lunettes, coiffures, fauteuil roulant, petits et grands, ...). Chez The Sense, l'excellence de nos outils vous garantissent la qualité de votre voyage dans une autre dimension.</p>
                   </div>
                </div>

                <div className="container description col-lg-12 align-text-center"> 
                    <h3><strong>Découvrez nos équipements</strong></h3>
                    <p>Car nous croyons que l’excellence de nos expériences et votre confort passe avant tout, nous n’achetons que les meilleurs produits du marché, et sommes directement en contact avec les marques pour proposer des outils adaptés à tous.</p>
                </div>

                <div className="troiscase">
                    <div className="row blocbtob">
                        <div className="container col-lg-5 img text-center">
                            <img className="img-fluid align-self-center" src="../img/ekip1.png" alt="the sense" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center blocbleu">
                            <h3><strong>CASQUE HTC VIVE COSMOS</strong></h3>
                            <p>Concernant notre casque VR, nous avons choisit d’optimiser vos expériences grâce à l'HTC VIVE COSMOS ! Chaque casque possède un écran LCD, offrant une qualité optimale pour une meilleure immersion. Car nous avons à coeur votre satisfaction, The Sense vous offre la meilleure technologie du marché actuel pour encore plus d’émotions et d’immersion.</p>
                        </div>
                    </div>
                    <div className="row blocbtob">
                        <div className="col-lg-7 text-left align-self-center blocbleu">
                            <h3><strong>BAGPACK HAPTIQUE RAPTURE</strong></h3>
                            <p>Haptique Rapture est une combinaison spécialisée pour l’utilisation VR, cette “armure” vous permettra de vous mouvoir sans problème et avec fluidité dans le jeu comme dans la réalité. Votre confort est également assuré grâce à son mantient et sa légéreté impressionnante (à peine 5kg), qualitées vous assurera une expérience réussie.</p>
                        </div>
                        <div className="container col-lg-5 img text-center">    
                            <img className="img-fluid align-self-center" src="../img/ekip2.png" alt="the sense" />
                        </div>
                    </div>
                    <div className="row blocbtob">
                        <div className="container col-lg-5 img text-center">
                            <img className="img-fluid align-self-center" src="../img/ekip3.png" alt="the sense" />
                        </div>
                        <div className="col-lg-7 text-left align-self-center blocbleu">
                            <h3><strong>COMPLEXE THE SENSE</strong></h3>
                            <p>Notre complexe d’une taille de 2 hectare vous permettra de vous amuser sans vous soucier des limites du terrain. Toutes nos expériences possèdent une salle dédiée d’environ 50m², y compris la CREATIVE ROOM que nous pouvons aménager selon vos goûts. Nous avons également souhaité rendre vos parties les plus immersives possible c’est nous mélons VR et Réalité Augmenté, vous permettant d’agir dans la vrai vie avec l’environnement de votre immersion.</p>
                        </div>
                    </div>
                </div> 

                <div className="container description col-lg-12 align-text-center"> 
                    <h3><strong>ILS SONT SATISFAITS DE NOS ÉQUIPEMENTS</strong></h3>
                    <p>Ceux qui en parlent le mieux, ce sont vous. Pour finir de vous convaincre de la qualité et de l’excellence de nos équipements, rien de mieux que d’écouter les retours que vous nous faites à chaque fin de sessions. Le taux satisfaction de nos clients concernant nos outils d’immersion est de 90%.</p>
                </div>

                <div className="carousel">
                    <FadeCarousel />
                </div>

            </div>
            <Footerter/>
        </div>
    )
}

export default Equipement;