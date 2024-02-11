import React from "react";
import "./bundle-style.css"
import bg from "../../../images/bundle-bg.png"

export const Bundle = () => {
    return (
        <div className="bundle__container container">
            <div className="bundle__box">
                <p className="bundle__text">
                    Get your favorite stories, originals and live sports with Disney+, Hulu, and ESPN+
                </p>
                <button className="bundle__btn">
                    GET ALL THREE
                </button>
                <p className="bundle__txt">
                    Terms Apply.
                </p>
            </div>
        </div>
    )
}