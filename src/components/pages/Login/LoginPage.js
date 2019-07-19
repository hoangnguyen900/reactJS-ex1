import React from "react";
import "./styles.scss";
import LoginFormLeft from "./forms/LoginFormLeft";
import LoginFormRightLogin from "./forms/LoginFormRightLogin";
import LoginFormRightSignUp from "./forms/LoginFormRightSignUp";
import { BrowserRouter, Route } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: ""
      }
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <div className="column">
            <LoginFormLeft />
          </div>
          <div className="column">
            <Route exact path="/" component={LoginFormRightLogin} />
            <Route exact path="/signup" component={LoginFormRightSignUp} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default LoginPage;
