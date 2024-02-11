import React from "react";
import "./cart.css"

export const Cart=(device)=>{
    return(
        <div className="cart__box">
            <img className="cart__icon" src={device.img} alt="icon" />
            <h3 className="cart__title">{device.title}</h3>
            <p className="cart__text">{device.text}</p>
        </div>
    )
}