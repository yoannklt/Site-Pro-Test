import '../index.css';
import ytblogo from '../img/ytblogo.png';
import instalogo from '../img/instalogo.png';
import twitterlogo from '../img/twitterlogo.png';
import facebooklogo from '../img/facebooklogo.png';

function Footerter() {
  return (
    <footer className="footer">
      <div className="text col-lg-5">
        <p>Nous contacter</p>
        <p>Réservation</p>
        <p>FAQ</p>
      </div>
      <div className="text col-lg-2">
        <p>© THE SENSE, SAS. Tous froits réservés</p>
      </div>
      <div className="text col-lg-2">
        <p>Modalités | Police de confidentialité</p>
      </div>
      <div className="appli col-lg-2">
        <img className="logo" src={ytblogo} alt="" />
        <img className="logo" src={instalogo} alt="" />
        <img className="logo" src={twitterlogo} alt="" />
        <img className="logo" src={facebooklogo} alt="" />
      </div>
    

    </footer>
  );
}

export default Footerter;