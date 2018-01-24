import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutAction } from './../../actions/authActions';

import './shared.style.css';
import Signup from '../signup/Signup';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.logoutAction();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const userMenuList = (
            <ul className="menu-selection text-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/questions">Questions</Link></li>
                <li><a href="#" onClick={this.onClick}>Logout</a></li>
            </ul>
        );

        const guestMenuList = (
            <ul className="menu-selection text-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        );

        return (
            <div>
                <ul className="sidebar">
                    <li className="visible-xs text-center">
                        <a href="#">
                            <i className="fa fa-list-alt"></i>
                        </a>
                    </li>
                    {isAuthenticated ? userMenuList : guestMenuList}
                </ul>
            </div>
        );
    }
}

SideBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutAction: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logoutAction })(SideBar);
