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
          <Container>
            <Nav>
              <Nav.Link href="../pages/News">News</Nav.Link>
              <Nav.Link href="../pages/Lightroom">Nos expériences</Nav.Link>
              <Nav.Link href="../pages/About">à propos de nous</Nav.Link>
              <Nav.Link href="../pages/Equipements">Nos équipements</Nav.Link>
              <Nav.Link href="#"><strong>Connexion</strong></Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbar;
