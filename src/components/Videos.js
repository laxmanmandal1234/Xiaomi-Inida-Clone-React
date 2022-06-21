import React from "react";
import VideoCard from "./VideoCard.js";
import "../styles/Videos.css";


function Videos({videos}){
    return (
        <div className="videos">
            {
                videos.map((item, index) => {
                    return (
                        <VideoCard 
                            key={item.image}
                            name={item.name}
                            image={item.image}
                            index={index}
                        />
                    )
                })
            }
        </div>
    );
}

export default Videos;