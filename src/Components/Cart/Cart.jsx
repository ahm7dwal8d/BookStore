import { useContext, Fragment, useState, useReducer } from "react";
import cartContext from "../../context/cartContext";
import "./style.css"

function reducer(state, action) {
    switch (action.type) {
        case "+":
            return state + 1;
        case "-":
            return state - 1;
        default:
            return state
    }
}

function Cart() {
    const { cartItem, removeFromCart } = useContext(cartContext);
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div className="cart">
            <h5 className="cart-head">your shopping cart</h5>
            <div className="container">
                <div className="cart-content">
                    {cartItem?.map((item) => {
                        return (
                            <Fragment key={item.isbn13}>
                                <div className="cart-item" key={item.isbn13}>
                                <div className="img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="cart-info">
                                    <div className="item-head">
                                    <h5 className="item-title">{item.title}</h5>
                                    <p className="item-body">{item.subtitle}</p>
                                    </div>
                                    <div className="item-operation">
                                        <div className="item-mount">
                                                <span
                                                    className="count"
                                                    onClick={() => dispatch({ type: "-" })}>-</span>
                                                <span>{state}</span>
                                                <span
                                                    className="count"
                                                    onClick={() => dispatch({type: "+"})}>+</span>
                                        </div>
                                        <span className="item-price">{item.price}</span>
                                            <button
                                                className="item-remove"
                                                onClick={() => removeFromCart(item.isbn13)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                                </div>
                                <hr />
                            </Fragment>
                        )
                    })}
                </div>
                <div className="cart-summry">
                    <span>order summary</span>
                    <ul>
                        <li>Subtotal <span>
                            ${cartItem.length !== 0 ? cartItem.reduce((acc, current) => acc + +current.price.slice(1), 0): 0}
                        </span></li>
                        <li>shopping cost <span>$0</span></li>
                        <li>discount <span>$0</span></li>
                        <li>total <span>
                        ${cartItem.length !== 0 ? cartItem.reduce((acc, current) => acc + +current.price.slice(1), 0): 0}
                        </span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart;