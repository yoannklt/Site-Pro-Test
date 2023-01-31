import "../css/Room.css";

function Lightroom() {
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

                <div className="row bandeaubleu" >
                    <div className="col-lg-4 img text-center">
                        <img className="img-fluid imgronde align-self-center" src={image9} alt="img9"></img>
                    </div>
                    <div className="col-lg-7 txt row align-items-baseline">
                        <div className="col col-lg-4 text-end h1Home">
                                <h1 className="">Qu'est-ce que la</h1>
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
                        <div>

                            <img className="img-fluid" src={image10} alt="" />
                        </div>
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

                <div className="avis">
                    <div className="container">
                        <h2><strong>Qu'est-ce qui vous retiens ?</strong></h2>
                    </div>

                    <div className="carouselavis">
                        <FadeCarouselavis />
                    </div>
                </div>

            </div>
            <Footerter />
        </div>
    )
}

export default Lightroom;