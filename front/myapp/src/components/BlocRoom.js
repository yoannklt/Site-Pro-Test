import "../css/Room.css";

function BlocRoom() {
    return (
        <div className="container col col-lg-12">
            <div className="container blocimg">
                <div>
                    <img className="img-fluid" src="../img/image10.png" alt="the sense" />
                </div>
            </div>
            <div className="container bloclight">
                <div className="blochome">
                    <h3><strong>Shangri-la : la cité perdue de z</strong></h3>
                    <h3>|</h3>
                    <h3 className="title">light room</h3>
                </div>
                <div className="row parag">
                    <p>Shangri-La la cité mythique, symbole de la paix, de prospérité et de magnficence. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver son existance, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux à la recherche de Percy Fawcett.</p>
                </div>
                <div className="row reservebtn text-center">
                    <div className="clc col-lg-12 align-self-center">
                        <a href="/Room"><img src="../img/boutonréserver.png" alt="the sense" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlocRoom;