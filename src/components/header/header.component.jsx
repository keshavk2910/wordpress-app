import React from 'react';
import './header.style.scss';
import{ NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav id="main-nav">
        <Link to="/wordpress-app/">
        <div className="logo-container">THIS IS LOGO</div>
        </Link>
        <ul className="menu-ul">
        <li><NavLink exact activeClassName="nav-active" to="/wordpress-app/" >Home</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/wordpress-app/about-us" >About Us</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/wordpress-app/contact-us">Contact Us</NavLink></li>
        </ul>
        </nav>
    );
}
export default Header;
