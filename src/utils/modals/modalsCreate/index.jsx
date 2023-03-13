import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';

const CreateModals = (props) => {

    const navigate = useNavigate()

    const {show, handleClose, url} = props


  return (
    <>
    
    <Modal show={show} onHide={()=>handleClose()} className="d-flex justify-content-center align-items-center text-center">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title className='px-5'>Success to create Data</Modal.Title>
        <Modal.Footer className='d-flex justify-content-evenly align-items-center'>
          <Button className='w-25' variant="secondary" onClick={()=>{
            handleClose(navigate(`${url}`))}}> Back </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateModals