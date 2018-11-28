import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../images/shayona-logob.png";

//create the Navbar Component
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="homepage-nav" className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="/" alt="homepage">
                <img src={logo} className="navbar-brand App-logo" alt="logo" />
              </a>
            </div>
            <ul className="nav navbar-right">
              <Link to="/login">
                <button
                  id="login-btn"
                  className="btn btn-primary"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "#0067db" }}
                >
                  Login
                </button>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
