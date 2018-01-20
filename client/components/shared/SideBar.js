import React, { Component } from 'react';
import { Link } from 'react-router';

import './shared.style.css';

class SideBar extends Component {
    constructor() {
        super();
        this.menu = [
                {id: 1, href: '/', text: 'Home'},
                {id: 2, href: '/profile', text: 'Profile'},
                {id: 3, href: '/questions', text: 'Questions'},
                {id: 4, href: '/signup', text: 'Signup'},
                {id: 5, href: '/login', text: 'Login'},
                {id: 6, href: '/logout', text: 'Logout'}
            ];
    }

    menuList() {
       return this.menu.map((link) => {
            return(
                <li key={link.id} className="menu-selection text-center">
                    <Link to={link.href}>{link.text}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul className="sidebar">
                    <li className="visible-xs text-center">
                        <a href="#">
                            <i className="fa fa-list-alt"></i>
                        </a>
                    </li>
                    {this.menuList()}
                </ul>
            </div>
        );
    }
}

export default SideBar;
