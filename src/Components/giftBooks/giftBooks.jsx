import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./style.css";
import cartContext from "../../context/cartContext";

function GiftBooks() {
    const [books, setBooks] = useState([]);
    const [slider, setSlider] = useState(0);
    useEffect(() => {
        axios.get("https://api.itbook.store/1.0/new").then((res) => {
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
    const { addToCart } = useContext(cartContext);
    return (
        <div className="books-gift">
            <h4 className="head">most gifted</h4>
            <div className="slider-container">
                <div className="btn">
                    {slider !== 3 &&
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
                                <div className="operation">
                                <a
                                    href={book.url}
                                    className="book-prevew">
                                        prevew</a>
                                    <button
                                        className="add-to-cart"
                                        onClick={() => addToCart(book)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GiftBooks;