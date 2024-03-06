import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Navbarss = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbars">
        <Container>
          <Navbar.Brand href="/" className="logo">
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navs justify-content-end" variant="underline">
              <Nav.Link href="/" className="navs_heading mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="navs_heading mx-2">
                About
              </Nav.Link>
              <Nav.Link href="#profile" className="navs_heading mx-2">
                Profile
              </Nav.Link>
              <Nav.Link href="#projects" className="navs_heading mx-2">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="navs_heading mx-2">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarss;
