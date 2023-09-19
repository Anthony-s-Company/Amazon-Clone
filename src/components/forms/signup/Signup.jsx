import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { signupUser } from "../../../services/User";
import Spinner from '../../Spinner'
import BasicModal from '../../BasicModal'

let redirectTimer;

export default function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ is: false, title: '', text: '' });
  const [success, setSuccess] = useState({ is: false, title: '', text: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true)

      await signupUser(email, username, password)
      setLoading(false)
      setSuccess({ is: true, title: 'Great!, you are registered', text: 'We are redirecting you to the login page' });
      redirectTimer = setTimeout(() => {
        navigate("/login/");
      }, 3000);

    } catch (err) {
      setLoading(false)
      setError({ is: true, title: 'Registration error', text: err.message });
      redirectTimer = setTimeout(() => {
        navigate("/signup/");
      }, 3000);
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
        {
          success.is && (
            <BasicModal isVisible={success.is} title={success.title} message={success.text} />
          )
        }

        <form onSubmit={handleSubmit} method="post" className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Create account</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to={'/login/'}>
                <span className="link-primary">
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
                onChange={(e) => { setUsername(e.target.value); }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                required
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(e) => { setEmail(e.target.value); }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                required
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => { setPassword(e.target.value); }}
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
