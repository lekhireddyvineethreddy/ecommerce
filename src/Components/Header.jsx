import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="Header-section">
           <div className="nav-data">
           <a className="Home" href="home">HOME</a>
            <a className="store" href="store">STORE</a>
            <a className="about" href="about">ABOUT</a>
           </div>
           <div>
            <button>Cart</button>
           </div>
        </div>
    );
}

export default Header;
