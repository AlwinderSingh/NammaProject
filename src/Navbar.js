import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({setView}) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src="https://nammayatri.in/logos/nammaYatrilogo.svg"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{setView(1)}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{setView(2)}}>Book a Ride</Nav.Link>
            <NavDropdown title="Know us More" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{setView(3)}}>About Us</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{setView(4)}}>
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{setView(5)}}>
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link  onClick={()=>{setView(6)}}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;