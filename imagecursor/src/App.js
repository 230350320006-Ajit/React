import React from "react";
import {useState} from "react";
import "./styles.css";
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
import logo1 from "./imgs/camera.png"
import logo2 from "./imgs/mobile.png"
import logo3 from "./imgs/acc.png"
import logo4 from "./imgs/cloth.jpg"
const images=[
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    logo1,  logo2,  logo3,  logo4
];

export default function App(){
    const[current,setCurrent]=useState(0);

function nextSlide(){
    setCurrent(current === images.length-1 ? 0 : current + 1);
}
function prevSlide(){
    setCurrent(current === 0 ? images.length - 1 : current -1 );
}
return (
    <div>
        <h2>project : Image_slides</h2>
        <div className="slider">
            <div className="left-arrow" onClick={prevSlide}>
            <BsFillArrowLeftCircleFill/>
            </div>
            <div className="right-arrow" onClick={nextSlide}>
            <BsFillArrowRightCircleFill/>
            </div>
            {images.map(
                (image,index)=>
                current === index && (
                    <div key={image} className="slide">
                        <img src={image} alt="images"/>
                        </div>
                )
            )}
        </div>
    </div>
);
}