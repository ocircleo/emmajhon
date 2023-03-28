import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="header-link">
                <a href="/order">order</a>
                <a href="/order-review">order review</a>
                <a href="/inventory">manage inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;