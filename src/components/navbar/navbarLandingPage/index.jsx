import React from 'react'
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarLandingPage = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="ms-5">
          <Nav>
            <Nav.Item className="me-5">
              <Link to="/register" className="nav-link fs-5 fw-bold">
                Register
              </Link>
            </Nav.Item>
            <Nav.Item className="me-5">
              <Link to="/login" className="nav-link fs-5 fw-bold">
                Login
              </Link>
            </Nav.Item>
            <Nav.Item className="me-5">
              <Link to="/menu" className="nav-link fs-5 fw-bold">
                Search Menu
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
  )
}

export default NavbarLandingPage