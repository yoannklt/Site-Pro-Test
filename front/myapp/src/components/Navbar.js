import '../index.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand className="navbrand" href="../pages/Home.js"><img src="../img/logo.png" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <a href="../pages/News">News</a>
            <a href="../pages/Lightroom">Nos expériences</a>
            <a href="../pages/About">à propos de nous</a>
            <a href="../pages/Equipements">Nos équipements</a>
            <a href="#"><strong>Connexion</strong></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbar;