import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { signupUser } from "../../../services/User";

export default function Signup() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function goToLogin(){
    navigate('/login') 
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
            <h3 className="Auth-form-title">Create account</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link>
                <span className="link-primary" onClick={goToLogin()}>
                  Sign In
                </span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                required
                minLength="4"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                required
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                required
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Welcome to Orinoco
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
