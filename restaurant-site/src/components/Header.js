import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Feane Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span>Feane</span>
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

