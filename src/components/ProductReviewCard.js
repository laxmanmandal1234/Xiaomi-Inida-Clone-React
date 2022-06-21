import React from "react";
import "../styles/ProductReviewCard.css";


function ProductReviewCard({image, review, name, price, index}){
    return (
        <div className="productReviewCard">
            <img src={image} alt={`${index} Review`} />
            <h5>{review}</h5>
            <span>{name} </span>
            <b>{price}</b>
        </div>
    );
}

export default ProductReviewCard;