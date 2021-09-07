import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Navbar } from "react-bootstrap";

export default function Naxvbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Steam Green</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">🛒</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
