import React, { Component } from 'react';

class SideBar extends Component {
    constructor() {
        super();
        this.menu = [
                {id: 1, href: '/home', text: 'Home'},
                {id: 2, href: '/news', text: 'News'},
                {id: 3, href: '/about', text: 'About'},
                {id: 4, href: '/contact', text: 'Contact Us'}
            ];
    }

    menuList() {
       return this.menu.map((link) => {
            return(
                <li key={link.id}>
                    <a href={link.href}>
                        {link.text}
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    <li className="visible-xs text-center">
                        <a href="#">
                            <i className="fa fa-list-alt"></i>
                        </a>
                    </li>
                    {this.menuList()}
                </ul>
                {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </p> */}
            </div>
        )
    }
}

export default SideBar;