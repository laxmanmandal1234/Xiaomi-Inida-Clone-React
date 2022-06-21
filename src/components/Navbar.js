import React from "react";
import "../styles/Navbar.css";
import {searchIcon} from "../svg/icons";

function Navbar(props){
    return (
        <div className="nav">
            <div className="logo">
                <a href="/">
                    <img id="logoImage" src={props.logo} alt="brand-logo" />
                </a>
            </div>

            <a className="navlinks" href="/miphones" >Xiaomi Phones</a>
            <a className="navlinks" href="/redmiphones" >Redmi Phones</a>
            <a className="navlinks" href="/tv" >TV</a>
            <a className="navlinks" href="/laptops" >Laptops & Tablets</a>
            <a className="navlinks" href="/fitness" >Fitness</a>
            <a className="navlinks" href="/home" >Home</a>
            <a className="navlinks" href="/audio" >Audio</a>

            <div className="searchbox">
                <input type="text" name="search" placeholder="Search Products" /> {searchIcon}
            </div>
        </div>
    );
}

export default Navbar;