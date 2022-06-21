import React from "react";
import "../styles/HotAccessoriesMenu.css";
import {Link} from "react-router-dom";

function HotAccessoriesMenu(){
    return (
        <div className="hotAccessoriesMenu">
            <Link className="hotAccessoriesLink" to="/music">Music Store</Link>
            <Link className="hotAccessoriesLink" to="/smartDevice">Smart Devices</Link>
            <Link className="hotAccessoriesLink" to="/home">Home</Link>
            <Link className="hotAccessoriesLink" to="/lifeStyle">Lifestyle</Link>
            <Link className="hotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
        </div>
    );
}

export default HotAccessoriesMenu;