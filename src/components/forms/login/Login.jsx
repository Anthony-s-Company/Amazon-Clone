import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goToSignup(){
    navigate('/signup') 
  }

//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth,email, password)
//     .then(auth => {
//         navigate('/') 
//     })
//     .catch(error => alert(error.message))

// }

// const register = e => {
//     e.preventDefault();
//      createUserWithEmailAndPassword(auth, email, password)
//     .then((auth) =>{
//         // sucessfully created a new user with email and password
//         if (auth){
//           navigate('/')  
//         }
//     })
//     .catch(error => alert(error.message))
// }
  return (
    <div className="back_screen">
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link>
              <span className="link-primary" onClick={goToSignup()}>
                Sign Up
              </span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Welcome
          </p>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
