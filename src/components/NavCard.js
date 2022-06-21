import React from "react";
import "../styles/NavCard.css";

function NavCard({name, price, image, index}){
    return (
        <div className="navCard">
            <img src={image} alt={`${index} Image`} />
            <p>{name}</p>
            <span>{price} </span>
        </div>
    );
}
export default NavCard;