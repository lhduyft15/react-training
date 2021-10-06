import React from "react";
import logo from "../../image/logo.png";
import "./styles.scss";
const Header = () => {
    return (
        <header className="header-container">
            <div className="header">
                <img src={logo} alt="logo" className="header-logo" />
                Form Validation Project
            </div>
        </header>
    );
};

export default Header;
