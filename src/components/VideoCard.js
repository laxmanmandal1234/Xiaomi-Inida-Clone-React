import React from "react";
import "../styles/VideoCard.css";
import {playButton} from "../svg/icons.js";


function VideoCard({name, image, index}){
    return (
        <div className="videoCard" style={{backgroundImage: `url(${image})`}}>
            <a href="#/">{playButton}</a>
            <p>{name} </p>
        </div>
    );
}

export default VideoCard;