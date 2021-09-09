import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar } from 'react-bootstrap';

export default function Naxvbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Steam Green</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="text-white text-decoration-none" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-white text-decoration-none" to="/login">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-white text-decoration-none" to="/cart">
                🛒
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
