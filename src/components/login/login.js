import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
      e.preventDefault()
      history.push('/course')
  }
  return (
    <div className="container">
      <form class="form-group col-md-6 mt-5" onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <a href="/course">
          <button type="submit" className="btn btn-primary btn-block mb-3">
            Submit
          </button>
        </a>
        <p className="forgot-password text-right mb-3">
          New User ? <a href="/signup">Sign Up Here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
