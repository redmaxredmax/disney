import React from "react";
import "./card-style.css"

export const Card = (user) => {
    return (
        <div className="card__block">
            <div>
                <img className="card__icon" src={user.img} alt="logo" />
                <h3 className="card__title">
                    {user.name} <span className="card__span">{user.span}</span>
                </h3>
                <p className="card__text">Thousands of shows, movies, and Originals on Disney+ and Hulu</p>
                <p className="card__text">{user.text1}</p>
                <p className="card__text">{user.text2}</p>
            </div>
            <div>
                <p className="card__cost card__title">{user.cost} <span className="card__cost_span">/month</span></p>
                <button className=" card__btn">Select</button>
            </div>
        </div>
    )
}