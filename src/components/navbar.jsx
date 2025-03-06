import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Workshop React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/hello" className="nav-link-custom">Hello</Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link-custom">Products</Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link-custom">Events</Nav.Link>
            <Nav.Link as={Link} to="/AddEvent" className="nav-link-custom">AddEvent</Nav.Link>
            <Nav.Link as={Link} to="/event-list" className="nav-link-custom">Event List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;