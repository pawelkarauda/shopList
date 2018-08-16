import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <nav className="navi">
      <div class="container">
        
      
        <ul className="navi-listed">
          <li className="nav-elem">
            <Link className="nav-elem-link" to="/shoplist">
              Zakupy
            </Link>
          </li>
          <li className="nav-elem">
            <Link className="nav-elem-link" to="/plans">
              Plany
            </Link>
          </li>
          <li className="nav-elem">
            <Link className="nav-elem-link" to="/goals">
              Cele
            </Link>
          </li>
          <li className="nav-elem">
            <Link
              to="/"
              className="nav-elem-link"
              onClick={this.onLogoutClick.bind(this)}
            >
              Wyloguj
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    );

    const guestLinks = (
      <nav className="navi">
        <ul className="navi-listed">
          {/* <li className="nav-elem">
            <Link className="nav-elem-link" to="/register">
              Rejestracja
            </Link>
          </li> */}
          <li className="nav-elem">
            <Link className="nav-elem-link" to="/login">
              Logowanie
            </Link>
          </li>
        </ul>
      </nav>
    );

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
