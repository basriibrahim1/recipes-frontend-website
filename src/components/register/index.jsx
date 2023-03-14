import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <section>
        <div className="register-container container d-flex flex-column justify-items-center align-items-center vh-100">
          <h3 className="text-center text-warning mt-5">Recipes...</h3>
          <h5 className="mb-2 mt-5 text-warning">Let's Get Started!</h5>
          <h5 className="mt-5 text-secondary">Create new account to access all features</h5>
          <div className="input-name w-50 mt-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input className="form-control h-70" id="name" name="name" type="text" placeholder="Name" autoFocus />
          </div>
          <div className="input-email w-50 mt-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input className="form-control h-70" id="email" name="email" type="text" placeholder="Email" />
          </div>
          <div className="input-password w-50 mt-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input className="form-control h-70" id="password" name="password" type="password" placeholder="Password" />
          </div>
          <div className="form-check d-flex w-50 mt-4">
            <input className="form-check-input me-2 text-warning" type="checkbox" id="terms" name="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to terms & conditions
            </label>
          </div>
          <button
            onClick={this.handleOpen}
            type="submit"
            className="button bg-warning text-white border-0 w-50 p-3 mt-4 rounded"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalToggle"
          >
            Register Account
          </button>

          <p className="mb-0 mt-5">
            Already have account? <Link to="/login" className="text-warning text-decoration-none">Login Here</Link>
          </p>
        </div>

        <Modal className="text-center d-flex justify-content-center align-items-center" show={this.state.show} onHide={this.handleClose} animation={true}>
          <Modal.Title className="p-3">You are all Set</Modal.Title>
          <Modal.Body className="px-5">Please check your Email for Verification!</Modal.Body>
          <div className="p-3">
            <Button className="btn-warning w-50" variant="secondary" onClick={this.handleClose}>
              OK
            </Button>
          </div>
        </Modal>
      </section>
    );
  }
}

export default RegisterComponent;
