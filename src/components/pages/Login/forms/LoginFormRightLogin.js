import React from "react";
import "./../styles.scss";
import { Link ,NavLink} from "react-router-dom";

class LoginFormRightLogin extends React.Component {
  render() {
    return (
        <div className="content-right">
          <div className="form-info">
            <h1>LOGIN</h1>
            <div className="formField">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="formField">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
            <div className="formField">
             
              {/* <button
                type="submit"
                id="btnlogin"
                name="btnlogin"
                className="btn-login"
              >
                LOGIN
              </button> */}
              <NavLink to="/profile" className="btn-login">LOGIN</NavLink>
              <Link to="/signup" className="link">
                Create an account
              </Link>
              <div className="title-background-hidden">
                <p>© 2019 Terralogic, Inc</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default LoginFormRightLogin;
