import React from "react";
import "../styles/HotItemCard.css";


function HotItemCard({name, price, image, index}){          //order doesn't matter
    return (
        <div className="hotItemCard">
            <img src={image} alt={`${index} Product`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    );
}

export default HotItemCard;