import '../index.css';
import ytblogo from '../img/ytblogo.png';
import instalogo from '../img/instalogo.png';
import twitterlogo from '../img/twitterlogo.png';
import facebooklogo from '../img/facebooklogo.png';

function Footerter() {
  return (
    <footer className="footer row">
      <div className="bloc1 col-lg-4 s-12">
        <p>Nous contacter</p>
        <p>Réservation</p>
        <p>FAQ</p>
      </div>
      <div className="bloc2 col-lg-3 offset-1 s-12">
        <p>© THE SENSE, SAS. Tous froits réservés</p>
      </div>
      <div className="bloc3 col-lg-2 s-12">
        <p>Modalités | Police de confidentialité</p>
      </div>
      <div className="bloc4 col-lg-2 s-12">
        <img className="logo" src={ytblogo} alt="" />
        <img className="logo" src={instalogo} alt="" />
        <img className="logo" src={twitterlogo} alt="" />
        <img className="logo" src={facebooklogo} alt="" />
      </div>
    

    </footer>
  );
}

export default Footerter;