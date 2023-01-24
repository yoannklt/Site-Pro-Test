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
            <Nav.Link href="../pages/News.js">News</Nav.Link>
            <Nav.Link href="../pages/Lightroom.js">Nos expériences</Nav.Link>
            <Nav.Link href="../pages/About.js">à propos de nous</Nav.Link>
            <Nav.Link href="../pages/Equipements.js">Nos équipements</Nav.Link>
            <Nav.Link href="#">Connexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;