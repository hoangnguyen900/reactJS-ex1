import React from "react";
import "./../styles.scss";
import { connect } from "react-redux";
import * as actions from "./../../../../actions/index";
class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      display_info: "",
      phone: "",
      avatar: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (window.confirm("Are you sure you wish to update ?"))
      this.props.onUpdateProfile(this.state);

    // this.setState({
    //   checkLogin:this.props.login.checkLogin===true?true:false
    // })
    // console.log(this.state);
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentWillMount() {
    this.props.onShowProfile();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.profile);
    var { profile } = nextProps;
    this.setState({
      display_name: profile.display_name,
      display_info: profile.display_info,
      phone: profile.phone,
      avatar: profile.avatar
    });
  }
  render() {
    var { display_name, display_info, phone, avatar } = this.state;
    return (
      <div className="p-content">
        <form className="p-box" onSubmit={this.onSubmit}>
          <div className="row m-b-120 p-imgField">
            <img
              src="https://comps.canstockphoto.com/cartoon-black-witch-cat-face-cute-eps-vectors_csp51000230.jpg"
              className="p-picture-avatar rounded"
              alt='avatar'
            />
            <a href="/#">
              <i className="fa fa-cog	" />
            </a>
          </div>
          <div className="row  ">
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Display Name</label>
                <input
                  type="text"
                  id="display_name"
                  name="display_name"
                  className="p-form-input"
                  value={display_name}
                  onChange={this.onChange}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Display Info</label>
                <input
                  type="text"
                  id="display_info"
                  name="display_info"
                  className="p-form-input"
                  value={display_info}
                  onChange={this.onChange}
                  placeholder="Your info"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-form-input"
                  value={localStorage.getItem("email")}
                  onChange={this.onChange}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="p-form-input"
                  value={phone}
                  onChange={this.onChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>New Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="p-form-input"
                  onChange={this.onChange}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Confirm Password</label>
                <input
                  type="text"
                  id="confirm"
                  name="confirm"
                  className="p-form-input"
                  onChange={this.onChange}
                  placeholder="Confirm password"
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <button className="p-btn-form-submit" type="submit">
              Update profile
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onShowProfile: () => {
      dispatch(actions.showProfileAPI());
    },
    onUpdateProfile: state => {
      dispatch(actions.updateProfileAPI(state));
    }
  };
};
const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
