import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUserAction } from '../../storages/action/authAction/registerAction';
import ModalsRegister from '../../utils/modals/modalsRegister';

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const dispatch = useDispatch()
  const data = useSelector(state => state.register)
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    let data = {
      email: email, 
      fullname: name,
      password: password
    }
    await dispatch(RegisterUserAction({...data}))
    handleOpen()
  }

  return (
    <section>
      <div className="register-container container d-flex flex-column justify-items-center align-items-center vh-100">
        <h3 className="text-center text-warning mt-5">Recipes...</h3>
        <h5 className="mb-2 mt-5 text-warning">Let's Get Started!</h5>
        <h5 className="mt-5 text-secondary">Create new account to access all features</h5>
        <form onSubmit={onSubmit} className="w-100 align-items-center justify-content-center d-flex flex-column">
        <div className="input-email w-50 mt-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input className="form-control h-70" id="email" name="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-name w-50 mt-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input className="form-control h-70" id="name" name="name" type="text" placeholder="Name" autoFocus onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="input-password w-50 mt-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input className="form-control h-70" id="password" name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-check d-flex w-50 mt-4">
          <input className="form-check-input me-2 text-warning" type="checkbox" id="terms" name="terms" required title='Please agree terms and condition to continue'/>
          <label className="form-check-label" htmlFor="terms">
            I agree to terms & conditions
          </label>
        </div>
        <button
          type="submit"
          className="button bg-warning text-white border-0 w-50 p-3 mt-4 rounded"
          >
          Register Account
        </button>
        {data.isLoading && <p className="mt-2">Please wait</p>}
        {data.newError && <p className='mt-3'>{data.newError}</p>}
        {!data.newError && <ModalsRegister show={show} handleClose={handleClose} />}
        </form>
        <p className="mb-0 mt-5">
          Already have account? <Link to="/login" className="text-warning text-decoration-none">Login Here</Link>
        </p>
      </div>
    </section>
  );
}

export default Register