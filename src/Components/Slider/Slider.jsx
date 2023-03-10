import React, { useState } from "react";
import "./slider.css";
import FristBook from "../../Images/Silder/book1.png"
import SecondBook from "../../Images/Silder/book2.png"
import ThridBook from "../../Images/Silder/book3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


function Slider() {
    const [sliderIndex, setSliderIndex] = useState(0);
    const makeSlider = (dir) => {
        if (dir === "left") {
            setSliderIndex(sliderIndex - 1)
        } else {
            setSliderIndex(sliderIndex + 1);
        }
    }
    return (
        <div className="slider">
            <div className="slider-container">
            <div className="btn">
                {sliderIndex !== 2 &&
                    <div
                        className=" left" 
                        onClick={() => makeSlider("right")}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>}
                {sliderIndex !== 0 &&
                    <div
                        className=" right"
                        onClick={() => makeSlider("left")}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>}
            </div>
            <div style={{transform: `translateX(${sliderIndex * -100}vw)`}} className="slider-wrapper">
                <div className="slide frist-slider">
                    <div className="slider-img">
                        <img src={ FristBook } alt="" />
                    </div>
                    <div className="slider-info">
                        <h1 className="slider-title">
                            Book Store
                        </h1>
                        <p className="slider-body">
                            It's Not Just Reading. It's Living The Adventure
                        </p>
                    </div>
                </div>
                <div className="slide second-slider">
                    <div className="slider-img">
                        <img src={ SecondBook } alt="" />
                    </div>
                    <div className="slider-info">
                        <h1 className="slider-title">
                            The Books For Everyone
                        </h1>
                        <p className="slider-body">
                            Toy Can Read At Home Or The BookStore
                        </p>
                    </div>
                </div>
                <div className="slide thrid-slider">
                    <div className="slider-img">
                        <img src={ ThridBook } alt="" />
                    </div>
                    <div className="slider-info">
                        <h1 className="slider-title">
                            Check Out The New Title
                        </h1>
                        <p className="slider-body">
                            We Send You The Book You Want At Home
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Slider;