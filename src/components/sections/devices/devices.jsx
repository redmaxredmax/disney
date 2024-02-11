import React from "react";
import "./devices-style.css"
import { Cart } from "./cart/cart";
import tv from "../../../images/tv.svg"
import laptop from "../../../images/laptop.svg"
import mobile from "../../../images/phone.svg"
import game from "../../../images/game.svg"


export const Devices = (device) => {
    return (
        <div className="container devices__container">
            <h2 className="devices__title">
                Available on your favorite devices
            </h2>
            <ul className="devices__list">
                <li className="devices__item">
                    <Cart img={tv} title="TV" 
                    text="Amazon Fire TV
                    Android TV devices
                    AppleTV
                    Chromecast
                    LG TV
                    Roku
                    Samsung
                    Xfinity X1 & Flex
                    Hisense 
                    Panasonic"/>
                </li>
                <li className="devices__item">
                    <Cart img={laptop} title="Computer" 
                    text="Chrome OS
                    MacOS
                    Windows PC"/>
                </li>
                <li className="devices__item">
                    <Cart img={mobile} title="Mobile & Tablet" 
                    text="Amazon Fire Tablets
                    Android Phones & Tablets
                    iPhone and iPad"/>
                </li>
                <li className="devices__item">
                    <Cart img={game} title="Game Consoles" 
                    text="PS4
                    PS5
                    Xbox One
                    Xbox Series X
                    Xbox Series S"/>
                </li>
            </ul>
        </div>
    )
}