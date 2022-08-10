import React from "react";

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="#home">
                <NavDropdown title="String Art" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/circles">Circles</NavDropdown.Item>
                    <NavDropdown.Item href="/tessellations">Tesselations</NavDropdown.Item>
                    <NavDropdown.Item href="dreamcatchers">Dreamcatchers</NavDropdown.Item>
                    <NavDropdown.Item href="mixed">Mixed Media</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Prints" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/relief">Relief</NavDropdown.Item>
                    <NavDropdown.Item href="/intaglio">Intaglio</NavDropdown.Item>
                    <NavDropdown.Item href="leafprints">Leaf Prints</NavDropdown.Item>
                    <NavDropdown.Item href="lithographs">Lithographs</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="2D" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/ink">Ink</NavDropdown.Item>
                    <NavDropdown.Item href="/watercolor">Water Color</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/threed">3D</Nav.Link>
                <Nav.Link href="/digital">Digital</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/cv">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;