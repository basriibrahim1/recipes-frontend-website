// import axios from "axios";
import React from "react";
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

// const url = "https://grumpy-onesies-cod.cyclic.app/login";

const LoginComponent = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let response = await axios.get("https://grumpy-onesies-cod.cyclic.app/users");

  //   try {
  //     axios.post(url, { email, password });
  //     if (email === response.email && password === response.password) {
  //       setLoggedIn(true);
  //     } else {
  //       alert("Invalid email or password");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // if (loggedIn) {
  //   return <Navigate to="/menu" />;
  // }

  return (
    <section>
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center text-warning mt-5">Recipes...</h3>
          <h5 className="mb-2 fs-2 mt-5 text-warning">Welcome</h5>
          <h5 className="mt-5 text-secondary">Log in into your existing account</h5>
            <div className=" w-50 mt-5">
              <label htmlFor="email" className="form-label">Email</label>
              <input className="form-control" id="email" name="email" type="text" placeholder="Email" />
            </div>
            <div className="w-50 mt-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input className="form-control h-50" id="password" name="password" type="password" placeholder="Password"/>
            </div>
            <div className="form-check d-flex w-50 mt-3">
              <input className="form-check-input me-2 text-warning" type="checkbox" id="terms" name="terms" />
              <label className="form-check-label" htmlFor="terms">I agree to terms & conditions</label>
            </div>
            <button type="submit" className="button bg-warning text-white w-50 p-2 mt-3 border-0 rounded">Login</button>
          <p className="mt-2 align-items-start w-50">Forgot your password? <Link to="/ForgotPassword" className="text-warning text-decoration-none">Click Here</Link>
          </p>
          <p className="mt-5">Don't have an account? <Link to="/register" className="text-warning text-decoration-none">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
