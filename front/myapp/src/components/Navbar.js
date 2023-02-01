import '../css/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SinginLogin from './SigninLogin';

function Navbarbar(props) {
  return (
    <div className='navbarrr '>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={"navbar " + props.theme}>
        <div className='col-lg-1 row'>
          <Nav.Link className="navbrand col-lg-1" href="/"><img src="../img/Logo.png" alt="the sense logo" /></Nav.Link>
        </div>
        <Navbar.Toggle className="test" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='list col-lg-10'>
          <Nav.Link className="navbtn" href="/News">News</Nav.Link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <Nav.Link className="navbtn" href="/Room">Nos expériences</Nav.Link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <Nav.Link className="navbtn" href="/About">à propos de nous</Nav.Link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <Nav.Link className="navbtn" href="/Equipements">Nos équipements</Nav.Link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <SinginLogin />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarbar;
