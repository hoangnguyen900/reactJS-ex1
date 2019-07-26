import React from "react";
import "./styles.scss";
import HeaderForm from "./forms/HeaderForm";
import FooterForm from "./forms/FooterForm";
import ProfileForm from "./forms/ProfileForm";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <BrowserRouter>
        <HeaderForm />
        <ProfileForm />
        <FooterForm />
      </BrowserRouter>
    );
  }
}

export default ProfilePage;
