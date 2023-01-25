import '../index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/Logo.png';

function Navbarbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <div className='col-lg-1 row'>
        <Nav.Link className="navbrand col-lg-1" href="../pages/Home"><img src={Logo} alt="" /></Nav.Link>
      </div>
      <Navbar.Toggle className="test" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='list col-lg-10'>
        <Nav.Link className="navbtn" href="../pages/News">News</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Nav.Link className="navbtn" href="../pages/Lightroom">Nos expériences</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Nav.Link className="navbtn" href="../pages/About">à propos de nous</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Nav.Link className="navbtn" href="../pages/Equipements">Nos équipements</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Nav.Link className="navbtn" href="#"><strong>Connexion</strong></Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarbar;
