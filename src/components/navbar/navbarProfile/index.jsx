import React, { useState } from 'react'
import Ayudia from '../../../assets/Ayudia.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navbar }  from 'react-bootstrap';
import {Image}  from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'



const NavbarProfileComponent = () => {

    const [show, setShow] = useState()

    const handleClose = () => {
        setShow(false)
    }
    
    const handleOpen = () => {
        setShow(true)
    }


  return (
    <>
    <Navbar collapseOnSelect expand="lg" >
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-5 mt-2'/>
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between ms-5'>
      <Nav>
        <Nav.Item className='me-5'>
          <Link to="/profile/recipes" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item className='me-5'>
          <Link to="/add-menu" className="nav-link">Add Recipes</Link>
        </Nav.Item>
        <Nav.Item className='me-5'>
          <Link to="/menu" className="nav-link">Search Menu</Link>
        </Nav.Item>
      </Nav>
      <Nav className=" me-5 mt-3">
        <Nav.Item className='border-start border-5 border-warning p-3'>
          <Nav.Link><Image className="profile-img me-3" src={Ayudia} alt="profile image"/></Nav.Link>
        </Nav.Item>
        <div className='d-flex flex-column justify-content-center text-center mt-2'>
        <Nav.Item>
        <Link to="/profile/recipes" className="name-profile text-center text-decoration-none text-black">Ayudia</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link> <p className="logout fw-bold text-black" onClick={handleOpen}>Logout</p></Nav.Link>
        </Nav.Item>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


  <Modal className='text-center d-flex justify-content-center align-items-center' show={show} onHide={handleClose} animation={true}>
      <Modal.Title className='p-3'>Are you sure want to logout?</Modal.Title>
      <div className='p-3 d-flex justify-content-evenly w-100'>
          <Button className='btn-warning w-50' variant="secondary" onClick={handleClose}>No</Button>
          <Link className='w-50 ms-3' to="/login"><Button className='btn-warning w-100' variant="secondary" onClick={handleClose}>Yes</Button></Link>
      </div>
    </Modal>
    </>
  )
}

export default NavbarProfileComponent