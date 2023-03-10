import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./style.css";

function BookWished() {
    const [books, setBooks] = useState([]);
    const [slider, setSlider] = useState(0);
    useEffect(() => {
        axios.get("https://api.itbook.store/1.0/search/new").then((res) => {
            setBooks(res.data.books)
        })
    }, [])
    const makeSlider = (dir) => {
        if (dir === "left") {
            setSlider(slider - 1)
        } else {
            setSlider(slider + 1)
        }
    }
    return (
        <div className="books-wished">
            <h4 className="head">books wished for</h4>
            <div className="slider-container">
                <div className="btn">
                    {slider !== 1 &&
                        <div
                        className="left"
                        onClick={() => makeSlider("right")}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>}
                    {slider !== 0 &&
                    <div
                        className="right"
                        onClick={() => makeSlider("left")}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>}
                </div>
                <div
                    className="slider-wrapper"
                    style={{transform: `translate(${slider * -100}vw)`}}>
                    {books?.map((book) => {
                        return (
                            <div className="slide" key={book.isbn13}>
                                <img src={book.image} alt='' />
                                <h4 className="book-head">{book.title}</h4>
                                <p className="book-price">price <span>{book.price}</span></p>
                                <a
                                    href={book.url}
                                    className="book-prevew">
                                    prevew</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookWished;