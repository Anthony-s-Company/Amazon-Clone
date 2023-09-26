/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/User";
import Spinner from '../../Spinner'
import BasicModal from '../../BasicModal'
import "./Login.css";
import { setToken } from '../../../utils/token';
import { setStorageValues, getStorageValues, cleanStorageValues } from '../../../utils/localStorage';
import { mergeLoggedGuestCarItems } from '../../../utils/helper';

function Login({ user, setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ is: false, title: '', text: '' });

  let redirectTimer;

  async function handleSubmit(event) {
    event.preventDefault();
    let guestCarItems
    let userCarItems
    setLoading(true)
    try {
      const response = await login(username, password)
      setStorageValues("username", username)
      setToken(response.token)
      setUser(username)

      guestCarItems = getStorageValues("GuessUser")
      userCarItems = getStorageValues(username)

      if (!userCarItems) {
        userCarItems = guestCarItems
      } else {
        userCarItems = mergeLoggedGuestCarItems(userCarItems, guestCarItems)
      }

      setStorageValues(username, userCarItems)
      cleanStorageValues("GuessUser")

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
            <BasicModal isVisible={error.is} title={error.title} message={error.text} />
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
            <div className="text-center">
              Continue as{" "}
              <Link to={'/'}>
                <span className="link-primary">
                  Guest
                </span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                value="mor_2314"
                placeholder="Enter Username"
                onChange={(e) => { setUsername(e.target.value); }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                value="83r5^_"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => { setPassword(e.target.value); }}
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
