import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <img src="" alt="" />
            <div className="header-link">
                <a href="/order">order</a><a href="/order-review">order review</a><a href="/inventory">manage inventory</a>
                <a href="/login">login</a>
            </div>
        </div>
    );
};

export default Header;