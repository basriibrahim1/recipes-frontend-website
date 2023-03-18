import React from 'react'
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarLandingPage = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='mt-5'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-5 mt-2" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between ms-5">
          <Nav>
            <Nav.Item className="me-5">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </Nav.Item>
            <Nav.Item className="me-5">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav.Item>
            <Nav.Item className="me-5">
              <Link to="/menu" className="nav-link">
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