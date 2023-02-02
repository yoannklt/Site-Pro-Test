import '../css/Footer.css';

function Footerter() {
  return (
    <footer className="footer row">
      <div className="bloc1 col-lg-4">
        <a href='/About'>Nous contacter</a>
        <a href='/Room'>Réservation</a>
        <a href='#faq'>FAQ</a>
      </div>
      <div className="bloc2 text-center col-lg-4">
        <span>© THE SENSE, SAS. Tous droits réservés</span>
      </div>
      <div className="bloc3 text-center col-lg-2">
        <span>Modalités &nbsp;|&nbsp; Police de confidentialité</span>
      </div>
      <div className="bloc4 col-lg-2 text-center row">
        <div className="col-lg-3">
          <a href='https://www.youtube.com/' target="_blank" rel='noreferrer'>
            <img className="logo" src="../img/ytblogo.png" alt="the sense logo youtube" />
          </a>
        </div>
        <div className="col-lg-3">
          <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'>
            <img className="logo" src="../img/instalogo.png" alt="the sense logo instagram" />
          </a>
        </div>
        <div className="col-lg-3">
          <a href='https://twitter.com/' target="_blank" rel='noreferrer'>
            <img className="logo" src="../img/twitterlogo.png" alt="the sense logo twiter" />
          </a>
        </div>
        <div className="col-lg-3">
          <a href='https://facebook.com/' target="_blank" rel='noreferrer'>
            <img className="logo" src="../img/facebooklogo.png" alt="the sense logo facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footerter;