import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUserAction } from "../../storages/action/authAction/auth";


const LoginComponent = () => {

  const data = useSelector(state => state.login)
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email,
      password
    }
    console.log(data)
    dispatch(LoginUserAction(data, navigate))
  };

  return (
    <section>
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center text-warning mt-5">Recipes...</h3>
          <h5 className="mb-2 fs-2 mt-5 text-warning">Welcome</h5>
          <h5 className="mt-5 text-secondary">Log in into your existing account</h5>
        <form onSubmit={handleSubmit} className='w-100 align-items-center justify-content-center d-flex flex-column'>
          <div className=" w-50 mt-5">
            <label htmlFor="email" className="form-label">Email</label>
            <input className="form-control" name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="w-50 mt-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input className="form-control h-50" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form-check d-flex w-50 mt-3">
            <input className="form-check-input me-2 text-warning" type="checkbox" id="terms" name="terms" required/>
            <label className="form-check-label" htmlFor="terms">I agree to terms & conditions</label>
          </div>
          <button type="submit" className="button bg-warning text-white w-50 p-2 mt-3 border-0 rounded">Login</button>
          {data.isLoading && <p className="mt-2">Please wait</p>}
          {data.error && <p className="mt-2">Login Failed, wrong email or password</p>}
          <p className="mt-2 align-items-start w-50">Forgot your password? <Link to="/ForgotPassword" className="text-warning text-decoration-none">Click Here</Link></p>
          <p className="mt-5">Don't have an account? <Link to="/register" className="text-warning text-decoration-none">Sign Up</Link></p>
        </form>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
