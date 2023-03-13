import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModals = (props) => {

    const {onDelete, show, handleClose, selected} = props


  return (
    <>
    
    <Modal show={show} onHide={()=>handleClose()} className="d-flex justify-content-center align-items-center text-center">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title className='px-5'>Are you sure want to delete this item?</Modal.Title>
        <Modal.Footer className='d-flex justify-content-evenly align-items-center'>
          <Button className='w-25' variant="secondary" onClick={()=>handleClose()}> No </Button>
          <Button className='w-25' variant="danger" onClick={()=> {
            onDelete(selected) 
            handleClose()}}> Delete data</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default DeleteModals