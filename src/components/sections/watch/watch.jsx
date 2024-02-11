import React from "react";
import "./watch-style.css"
import watch from "../../../images/watch.png"

export const Watch = () => {
    return (
        <div className="watch">
            <div className=" watch__container container">
                <div className="watch__img">
                    <img className="watch__pic" src={watch} alt="img" />
                </div>
                <div className="watch__block">
                    <h2 className="watch__title">
                        Watch the way you want
                    </h2>
                    <ul className="watch__list">
                        <li className="watch__item">
                            <p className="watch__text">Host virtual movie nights with GroupWatch. Pause, rewind, and react with up to six friends. To invite or be invited to join GroupWatch, subscription is required.</p>
                        </li>
                        <li className="watch__item">
                            <p className="watch__text">Download any movie or series and watch it on the go.</p>
                        </li>
                        <li className="watch__item">
                            <p className="watch__text">Keep your family safe with easy parental controls.</p>
                        </li>
                        <li className="watch__item">
                            <p className="watch__text">An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices.</p>
                        </li>
                        <li className="watch__item">
                            <p className="watch__text">Stream on up to four devices at the same time.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}