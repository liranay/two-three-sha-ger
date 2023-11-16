import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../resources/david_star.jpeg'
import { Image } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{padding: 0}}>
      <Container fluid style={{background: "#7FB3FF"}}>
        <Navbar.Brand>
          <Image width={65} src={logo} alt="logo" style={{borderRadius:"8px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Favorites</Nav.Link>
            <Nav.Link href="#action2">My Collection</Nav.Link>
            <Nav.Link href="#action2">Share History</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;