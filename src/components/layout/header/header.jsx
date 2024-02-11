import React from "react";
import icon1 from "../../../images/disney_1.svg"
import icon2 from "../../../images/disney_2.svg"
import total from "../../../images/total-icons.svg"
import headerBg from "../../../images/header-bg.jpg"
import "./header-style.css"

export const Header = () => {
    return (
        <div className="header">
            <button className="header__btn">LOG IN</button>
            <div className="header__box">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#">
                            <img className="header__icon" src={icon1} alt="icons" />
                        </a>
                        <button className="header__block_btn">GET THEM BOTH</button>
                    </li>
                    <li className="header__item">
                        <a href="#">
                            <img className="header__icon" src={icon2} alt="icons" />
                        </a>
                        <button className="header__block_btn">GET ALL THREE</button>
                    </li>
                </ul>
                <div className="header__block">
                    <p className="header__text">All of these and more now streaming.</p>
                    <p className="header__text">The Disney Bundle Duo Basic includes Disney+ (With Ads) and Hulu (With Ads). Terms Apply.</p>
                    <a href="#">
                        <img src={total} alt="icons" />
                    </a>
                    <a href="#" className="header__txt">View All Plan Options</a>
                </div>
            </div>

        </div>
    )
}