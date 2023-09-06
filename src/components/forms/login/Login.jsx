import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/User";
import Spinner from '../../Spinner'
import BasicModal from '../../BasicModal'
import "./Login.css";
import {setToken} from '../../../utils/token';
import {setStorageValues} from '../../../utils/localStorage';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ is: false, title: '', text: '' });

  let redirectTimer;

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await login(username, password)
      setStorageValues("username", username)
      setToken(response.token)
      
      redirectTimer = setTimeout(() => {
        setLoading(false)
        navigate("/");
      }, 2000);

    } catch (err) {
      setLoading(false)
      setError({ is: true, title: 'Registration error', text: err.message });
      console.log(err);
    }
  }

  useEffect(() => {
    return () => {
        clearTimeout(redirectTimer);
    }
  }, []);

  return (
    <div className="back_screen">
      <div className="Auth-form-container">
      {
        loading && (
        <Spinner />)
      }
      {
        error.is && (
          <BasicModal isVisible={error.is} title={error.title} message={error.text}/>
        )
      }
      <form onSubmit={handleSubmit} method="POST" className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link to={'/signup/'}>
              <span className="link-primary">
                Sign Up
              </span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              onChange={(e) => {setUsername(e.target.value);}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {setPassword(e.target.value);}}
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
