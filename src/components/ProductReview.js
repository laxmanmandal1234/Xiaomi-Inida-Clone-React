import React from "react";
import ProductReviewCard from "./ProductReviewCard.js";
import "../styles/ProductReview.css";


function ProductReview({productReviews}){
    return (
        <div className="productReview">
            {
                productReviews.map((item, index) => {
                    return (
                        <ProductReviewCard 
                            key={item.image}
                            image={item.image}
                            review={item.review}
                            name={item.name}
                            price={item.price}
                            index={index}
                        />
                    )
                })
            }
        </div>
    );
}

export default ProductReview;