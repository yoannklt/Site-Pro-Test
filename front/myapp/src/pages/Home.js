import Navbarbar from "../components/Navbar"
import image9 from "../img/image9.png"
import image10 from "../img/image10.png"
import boutonréserver from "../img/boutonréserver.png"
import image1 from "../img/image1.png"
import image2 from "../img/image2.png"
import image3 from "../img/image3.png"
import image4 from "../img/image4.png"
import image5 from "../img/image5.png"

function Home() {
    return (
        <div>
            <Navbarbar />
            <div className="container">

                <div className="row text-center">
                    <div className="col col-lg-12 hero">
                    </div>
                    <div className="col col-lg-12">
                        <button className="discoverButton">Découvrir</button>
                    </div>
                </div>

                <div className="description row">
                    <div className="col col-lg-6">
                        <div className="image9">
                            <img className="img-fluid imageHome" src={image9} alt="" />
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <h1>Qu'est-ce que </h1>
                    </div>
                </div>

                <div className="container col col-lg-12">
                    <div className="container blocimg">
                        <img className="img-fluid" src={image10} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="row">
                        </div>
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
                        <img className="img-fluid" src={image1} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="row">
                        </div>
                        <div className="blochome">
                            <h3><strong>The confuring exprerience</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">dark room</h3>
                        </div>
                        <div className="row parag">
                            <p>Revivez l'histoire d'un chef d'oeuvre cinématographique au travers d'une exprérience aussi bien réaliste qu'immersive. Rassemblez ce qu'il vous reste de courage, les inspecteurs Ed et Loren Warren ont besoin de vous. Un malheur hante la maison de ces derniers et vous ne pouvez pas vous en échapper sans sacrifices. serez-vous à la hauteur de ce qui vous attend ? Bonne chance, vous en aurez besoin !</p>
                        </div>
                        <div className="row reserve text-center">    
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
                            <p>Sentez votre coeur battre, votre souffle se couper, votre concentration monter... Enrôlez des joueurs, formez votre équipe et préparez vous au combat § Arrachez la victoire à vos adversaires à travers une bataille dans des décors et des "maps" des plus immersives. En équipe de 4 ou 5 voyez lesquels d'entre vous sont dignes de remporter le trophée.</p>
                        </div>
                        <div className="row reserve text-center">    
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
                        <img className="img-fluid col-lg-4" src={image3} alt="" />
                        <img className="img-fluid col-lg-4" src={image4} alt="" />
                        <img className="img-fluid col-lg-4" src={image5} alt="" />
                    </div>
                    <div className="container blocgris">
                        <div className="row">
                        </div>
                        <div className="blochome">
                            <h3><strong>Créez votre propre expérience</strong></h3>
                            <h3>|</h3>
                            <h3 className="title">creative room</h3>
                        </div>
                        <div className="row parag">
                            <p>Vous en avez marre des expériences répétitives ? Vous êtes à la recherche d'une toute nouvelle expérience virtuelle ? Alors venez créer votre propre expérience avec notre tout nouveau système de création virtuelle ! Vous nous exposez votre idée et votre univers et nous le mettons en oeuvre rien que pour vous ! N'attendez plus, c'est désormais votre création, votre univers, votre expérience, votre SENSE.</p>
                        </div>
                        <div className="row reserve text-center">    
                            <div className="clc col-lg-6 align-self-center">
                                <a href="/Room"><img src={boutonréserver} alt="" /></a>
                            </div>
                            <div className="redirection col-lg-2 align-items-end">
                                <a href="/Room">découvrez la creative room -</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;