import '../css/Bandeau.css';
import image9 from "../img/image9.png";
import thesense from '../img/thesense.png';



function Bandeau() {
    return (
        <div className="row bandeaubleu">
            <div className="col-lg-4 img text-center">
                <img className="img-fluid imgronde align-self-center" src={image9} alt="img9"></img>
            </div>
            <div className="col-lg-7 txt row align-items-center textebottom">
                <h3 className="">Qu'est-ce que
                    <img className="img-fluid logoHome text-start" src={thesense} alt="logo the sense" />
                    &nbsp;?
                </h3>
                <p>Préparez-vous pour une expérience unique qui vous emmenera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d’autres dimensions et vivez l’impossible en interragissant avec un environnement dynamique et virtuel. Ce n’est pas une expérience en réalité virtuelle que vous vivez, c’est la réalité.</p>
            </div>
        </div>
    )
}

export default Bandeau;