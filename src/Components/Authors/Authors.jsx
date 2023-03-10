import React from "react";
import { authors } from "../../data/Acthors";
import "./style.css"

function Authors() {
    console.log(authors)
    return (
        <div className="authors">
            <div className="container">
                {authors?.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <img src={item.image} alt='' />
                            <h4>{item.name}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Authors;