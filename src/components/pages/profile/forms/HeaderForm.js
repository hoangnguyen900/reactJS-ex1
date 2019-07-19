import React from "react";
import "./../styles.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class HeaderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="row">
        <div className="p-header">
          <div className="col-sm-3">
            <img
              src={require("./../../../../images/terralogic.png")}
              className="p-picture-background"
            />
          </div>
          <div className="col-sm-2 pull-right">
            <Link to="/profile" className="p-link">
              PROFILE
            </Link>
          </div>
        </div>
      </div>
        );
    }
}

export default HeaderForm;