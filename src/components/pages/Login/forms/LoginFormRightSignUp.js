import React from "react";
import "./../styles.scss";
import { Link } from "react-router-dom";
class LoginFormRightSignUp extends React.Component {
  render() {
    return (
      <div className="content-right">
        <div className="form-info1">
          <h1>Sign Up</h1>
          <div className="formField">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="formField">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          <div className="formField">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              placeholder="Confirm your password"
            />
          </div>
          <div className="formField">
            <button
              type="submit"
              id="btnlogin"
              name="btnlogin"
              className="btn-login"
            >
              CONFIRM
            </button>
            <Link to="/" className="link">
              I'm already member
            </Link>
          </div>
          <div className="title-background-hidden">
            <p>© 2019 Terralogic, Inc</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginFormRightSignUp;
