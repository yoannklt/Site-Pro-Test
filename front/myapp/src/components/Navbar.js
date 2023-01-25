import '../index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/Logo.png';
import SinginLogin from './SigninLogin';

function Navbarbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <div className='col-lg-1 row'>
        <Nav.Link className="navbrand col-lg-1" href="/"><img src={Logo} alt="" /></Nav.Link>
      </div>
      <Navbar.Toggle className="test" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='list col-lg-10'>
        <Nav.Link className="navbtn" href="/News">News</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Nav.Link className="navbtn" href="/Lightroom">Nos expériences</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Nav.Link className="navbtn" href="About">à propos de nous</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Nav.Link className="navbtn" href="/Equipements">Nos équipements</Nav.Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <SinginLogin />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarbar;
