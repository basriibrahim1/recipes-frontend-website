import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalsRegister = (props) => {
    const {show, handleClose} = props

  return (
    <Modal className="text-center d-flex justify-content-center align-items-center" show={show} onHide={handleClose} animation={true}>
        <Modal.Title className="p-3">You are all Set</Modal.Title>
        <Modal.Body className="px-5">Please check your Email for Verification!</Modal.Body>
        <div className="p-3">
          <Button className="btn-warning w-50" variant="secondary" onClick={handleClose}>OK</Button>
        </div>
      </Modal>
  )
}

export default ModalsRegister