import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            Navbar
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/features">
              Features
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Navigation;
