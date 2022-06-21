import React, { useEffect, useState } from "react";
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";

function NavOptions({miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio}){
    
    const [miPhonesToggle, setmiPhonesToggle] = useState(false);
    const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
    const [tvToggle, settvToggle] = useState(false);
    const [laptopToggle, setlaptopToggle] = useState(false);
    const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] = useState(false);
    const [homeToggle, sethomeToggle] = useState(false);
    const [audioToggle, setaudioToggle] = useState(false);
    
    useEffect(() => {
        if(window.location.pathname === "/miphones"){
            return setmiPhonesToggle(true);
        }
        if(window.location.pathname === "/redmiphones"){
            return setredmiPhonesToggle(true);
        }
        if(window.location.pathname === "/tv"){
            return settvToggle(true);
        }
        if(window.location.pathname === "/laptops"){
            return setlaptopToggle(true);
        }
        if(window.location.pathname === "/fitness"){
            return setfitnessAndLifeStyleToggle(true);
        }
        if(window.location.pathname === "/home"){
            return sethomeToggle(true);
        }
        if(window.location.pathname === "/audio"){
            return setaudioToggle(true);
        }

    }, []);
    
    return (
        <div className="navOptions">
            {
                miPhonesToggle && miPhones.map((item, index) => {
                    return (
                        <NavCard 
                            key={item.image}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    )
                })                
            }
            {
                redmiPhonesToggle && redmiPhones.map((item, index) => {
                    return (
                        <NavCard 
                            key={item.image}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    )
                })                
            }
            {
                tvToggle && tv.map((item, index) => {
                    return (
                        <NavCard 
                            key={item.image}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    )
                })                
            }
            {
                laptopToggle && laptop.map((item, index) => {
                    return (
                        <NavCard 
                            key={item.image}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    )
                })                
            }
            {
                fitnessAndLifeStyleToggle && fitnessAndLifeStyle.map((item, index) => {
                    return (
                        <NavCard 
                            key={item.image}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    )
                })                
            }
            {
                homeToggle && home.map((item, index) => {
                    return (
                        <NavCard 
                            key={item.image}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    )
                })                
            }
            {
                audioToggle && audio.map((item, index) => {
                    return (
                        <NavCard 
                            key={item.image}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    )
                })                
            }
        </div>
    );
}

export default NavOptions;