import Navbarbar from "../components/Navbar"
import image9 from "../img/image9.png"
import image10 from "../img/image10.png"
import boutonréserver from "../img/boutonréserver.png"

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
                            <img className="img-fluid" src={image9} alt="" />
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
                        <div className="row reserve text-center" >
                            <a href="/Lightroom"><img src={boutonréserver} alt="" /></a>
                            <a href="/Lightroom">découvrez Light room -</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;