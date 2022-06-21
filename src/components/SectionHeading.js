import React from "react";
import "../styles/SectionHeading.css";

function SectionHeading(props){
    return (
        <div className="sectionHeading">
            <div></div>
            <p>{props.text}</p>
            <div></div>
        </div>
    );
}

export default SectionHeading;


/*
another way of receiving values from React components using js destructuring

function SectionHeading({text}){     //destructured here itself in 'text' variable
    return (
        <div className="sectionHeading">
            <div></div>
            <p>{text}</p>             //no need to write props.text
            <div></div>
        </div>
    );
}
*/