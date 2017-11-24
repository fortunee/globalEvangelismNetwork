import React, { Component } from 'react';
import './shared.style.css';

class SideBar extends Component {
    constructor() {
        super();
        this.menu = [
                {id: 1, href: '/home', text: 'Home'},
                {id: 2, href: '/news', text: 'News'},
                {id: 3, href: '/about', text: 'About'},
                {id: 4, href: '/contact', text: 'Contact Us'},
                {id: 4, href: '/signup', text: 'Signup'}
            ];
    }

    menuList() {
       return this.menu.map((link) => {
            return(
                <li key={link.id} className="menu-selection text-center">
                    {link.text}
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
        )
    }
}

export default SideBar;