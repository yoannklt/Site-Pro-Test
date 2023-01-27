import '../index.css';
import ytblogo from '../img/ytblogo.png';
import instalogo from '../img/instalogo.png';
import twitterlogo from '../img/twitterlogo.png';
import facebooklogo from '../img/facebooklogo.png';

function Footerter() {
  return (
    <footer className="footer row">
      <div className="bloc1 col-lg-4">
        <a href='#'>Nous contacter</a>
        <a href='#'>Réservation</a>
        <a href='#'>FAQ</a>
      </div>
      <div className="bloc2 text-center col-lg-4">
        <span>© THE SENSE, SAS. Tous droits réservés</span>
      </div>
      <div className="bloc3 text-center col-lg-2">
        <span>Modalités &nbsp;|&nbsp; Police de confidentialité</span>
      </div>
      <div className="bloc4 col-lg-2 text-center row">
        <div className="col-lg-3">
          <a href='#'>
            <img className="logo" src={ytblogo} alt="" />
          </a>
        </div>
        <div className="col-lg-3">
          <a href='#'>
            <img className="logo" src={instalogo} alt="" />
          </a>
        </div>
        <div className="col-lg-3">
          <a href='#'>
            <img className="logo" src={twitterlogo} alt="" />
          </a>
        </div>
        <div className="col-lg-3">
          <a href='#'>
            <img className="logo" src={facebooklogo} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footerter;