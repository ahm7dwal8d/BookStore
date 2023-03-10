import React, { useState } from "react";
import cartContext from "./cartContext";

function ContextProvider({ children }) {
    const [cartItem, setCartItem] = useState([])
    const addToCart = (item) => {
        setCartItem([...cartItem, item])
    }
    const removeFromCart = (id) => {
        const cart = cartItem.filter((item) => {
            return item.isbn13 !== id;
        })
        setCartItem(cart)
    }
    return (
        <cartContext.Provider value={
            {
                cartItem,
                addToCart,
                removeFromCart
            }
        }>
            {children}
        </cartContext.Provider>
    )
}

export default ContextProvider;