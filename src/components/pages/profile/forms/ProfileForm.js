import React from "react";
import "./../styles.scss";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="p-content">
        <form className="p-box">
          <div className="row m-b-120 p-imgField">
            <img
              src={require("./../../../../images/avatar-circle-human-female-black-7-512.png")}
              className="p-picture-avatar rounded"
              alt="avatar"
            />
            <a href="/#" onClick="">
              <i class="fa fa-cog	" />
            </a>
          </div>
          <div className="row  ">
            <div className="col-sm-6">
              <div className="p-formField">
                <label for="display">Display Name</label>
                <input
                  type="text"
                  id="display"
                  name="display"
                  className="p-form-input"
                  value="Hoang Nguyen"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label for="displayinfo">Display Info</label>
                <input
                  type="text"
                  id="displayinfo"
                  name="displayinfo"
                  className="p-form-input"
                  value=""
                  placeholder="Your info"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-form-input"
                  value="hoang.nguyen@terralogic.com"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label for="phone">Phone Number</label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="p-form-input"
                  value=""
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label for="password">New Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="p-form-input"
                  value=""
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label for="confirm">Confirm Password</label>
                <input
                  type="text"
                  id="confirm"
                  name="confirm"
                  className="p-form-input"
                  value=""
                  placeholder="Confirm password"
                />
              </div>
            </div>
          </div>
          <div className="row " >
            <button className="p-btn-form-submit" type="submit">
              Update profile
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
