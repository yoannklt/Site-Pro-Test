import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand className="navbrand" href="../pages/Home.js"><img src="../img/logo.png" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <a hover="" href="../pages/News.js">News</a>
            <a hover="" href="../pages/Lightroom.js">Nos expériences</a>
            <a hover="" href="../pages/About.js">à propos de nous</a>
            <a hover="" href="../pages/Equipements.js">Nos équipements</a>
            <a hover="" href="#"><strong>Connexion</strong></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;