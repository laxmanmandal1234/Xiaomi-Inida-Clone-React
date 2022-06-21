import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function BottomSlider({slides}){
    return (
        <Carousel fade p-3>
            {
                slides.map((item, index) => {
                    return (
                        <Carousel.Item key={item.image} interval={2000} keyboard={true}>
                            <img className="d-block w-100" src={item.image} alt={`${index} Slide`} />
                            <Carousel.Caption>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>{item.source}</p>
                                <u>Read more</u>
                            </Carousel.Caption>
                        
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default BottomSlider;