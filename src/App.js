import React from "react";
import LoginPage from "./components/pages/Login/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";


import ProfilePage from "./components/pages/profile/ProfilePage";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />

      </BrowserRouter>
    );
  }
}

export default App;
