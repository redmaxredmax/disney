import React from "react";
import movies from "../../../images/hero-movies.png"
import "./hero-style.css"


export const Hero=()=>{
    return(
        <div className="hero">
            <div className="container hero__container">
                <ul className="hero__list">
                    <li className="hero__item">
                        <button className="hero__tab">TRENDING</button>
                    </li>
                    <li className="hero__item">
                        <button className="hero__tab">NEW ON DISNEY+</button>
                    </li>
                    <li className="hero__item">
                        <button className="hero__tab">COMING SOON</button>
                    </li>
                </ul>
                <div>
                    <img className="hero__images" src={movies} alt="movies" />
                </div>
            </div>
        </div>
    )
}