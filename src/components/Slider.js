import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Slider(props) {
    return(
        <Carousel fade>
            {
                props.slidesImages.map(function(item, index){
                    return (
                        <Carousel.Item interval={2000} keyboard={true}>
                            <img
                                className="d-block w-100"
                                src={item}
                                alt={index}
                            />
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    );
}

export default Slider;