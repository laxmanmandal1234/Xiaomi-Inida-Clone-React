import React from "react";
import "../styles/StarProduct.css";


function StarProduct({starProduct}){
    return (
        <div className="starProduct">
            <div>
                <a href={starProduct[0].url} > <img src={starProduct[0].image} alt="1stImage" /> </a>
            </div>
            <div>
            <a href={starProduct[1].url} ><img src={starProduct[1].image} alt="2ndImage" /></a>
            <a href={starProduct[2].url} ><img src={starProduct[2].image} alt="3rdImage" /></a>
            <a href={starProduct[3].url} ><img src={starProduct[3].image} alt="4thImage" /></a>
            </div>
        </div>
    );
}

export default StarProduct;