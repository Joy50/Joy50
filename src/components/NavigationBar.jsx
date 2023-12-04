import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import logo from "../images/logo.svg";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="text-white py-4" fixed="top" style={{backgroundColor:"#a51e1e"}}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
          <img src={logo} alt="Logo" style={{width:"60px", height: "60px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href='/' style={{color:"whitesmoke", textAlign:"center"}}>Home</Nav.Link>
            <Nav.Link href='/#about-me' style={{color:"whitesmoke", textAlign:"center"}}>About Me</Nav.Link>
            <Nav.Link href='/#portfolio' style={{color:"whitesmoke", textAlign:"center"}}>Portfolio</Nav.Link>
            <Nav.Link href='/#testimonials' style={{color:"whitesmoke", textAlign:"center"}}>Testimonials</Nav.Link>
            <Nav.Link href='/#blogs' style={{color:"whitesmoke", textAlign:"center"}}>Blogs</Nav.Link>
            <Nav.Link href='/#contact' style={{color:"whitesmoke", textAlign:"center"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
