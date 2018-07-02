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



/*
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/feed">
                        Zakupy
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        Plany
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={this.onLogoutClick.bind(this)}>                   
                        Wyloguj
                    </Link>                        
                    
                </li>
            </ul>*/
        );

        const guestLinks = (

                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            
                        </ul>

                        <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Rejestracja
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Logowanie
                    </Link>
                </li>
            </ul>
                        
                    </div>
                </div>
            </nav>
        );

            

        return (
           <div>



                        {isAuthenticated ? authLinks : guestLinks}

           </div>
        );
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
