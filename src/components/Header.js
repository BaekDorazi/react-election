import React from "react";
import sampleImg from "../image/logo512.png";

const Header = (props) => {
    return (
        <div className="header-container">
            <img className="logo" src={sampleImg}/>

            <img className="right-image" src={sampleImg}/>
        </div>
    );
};

export default Header;
