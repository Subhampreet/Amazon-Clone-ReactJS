import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
    return (
        <div className="header">
            <img src="./amazon-logo-main.png" className="header-logo" />

            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
                <div className=" header-option-main">
                    <span className="header-option-one">Hello, Guest</span>
                    <span className="header-option-two">Sign In</span>
                </div>

                <div className="header-option">
                    <span className="header-option-one">Returns</span>
                    <span className="header-option-two">& Orders</span>
                </div>

                <div className="header-option">
                    <span className="header-option-one">Your</span>
                    <span className="header-option-two">Prime</span>
                </div>
            </div>

            <div className="header-option-basket">
                <ShoppingCartOutlinedIcon className="header-basket-icon" />
                <span className="header-option-two header-basket-count">0</span>
            </div>
        </div>
    )
}

export default Header
