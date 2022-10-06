import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import logoURL from "../public/img/logo.png"
import flagURL from "../public/img/flag.png"

import Stack from 'react-bootstrap/Stack';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />


function Header() {
  return (
    <>
    <Navbar bg="light" expand="lg" fixed = "top" style = {{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
      <Container fluid>
        <Stack direction="horizontal" gap={3} sticky="top" style={{width: '100%', justifyContent: 'space-between', textAlign: 'center'}}>
          <div>
            <img src = {logoURL} alt = "logo" style ={{marginLeft: 200, marginTop: 24}} />
          </div>
          <div className="ms-auto" style = {{marginRight: 100}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to = "/menu"> <h5 style = {{ color: 'black'}} className = "btn btn-outline-info"> MENU </h5> </NavLink>
                <NavLink to = "/reservation"> <h5 style = {{ color: 'black'}} className = "btn btn-outline-info"> RESERVATION </h5> </NavLink>
                <NavLink to = "/gallery"> <h5 style = {{ color: 'black'}} className = "btn btn-outline-info"> GALLERY </h5> </NavLink>
                <NavLink to = "/contact"> <h5 style = {{ color: 'black'}} className = "btn btn-outline-info"> CONTACT </h5> </NavLink>
                <NavLink to = "/login"> <h5 style = {{ color: 'black'}} className = "btn btn-outline-info"> LOGIN </h5> </NavLink>
                <Navbar.Brand to = "/"> <img src = {flagURL} alt = "flag" style = {{marginLeft: 20}}/> </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Stack>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;