import React from "react";

import logo from "../image/logo.png";
import logo2 from "../image/logo_02.png";

const Header = (props) => {
    return (
        <div className="header-container">
            <img className="logo" src={logo}/>

            <img className="right-image" src={logo2}/>
        </div>
    );
};

export default Header;
