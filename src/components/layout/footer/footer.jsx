import React from "react";
import logo from "../../../images/disney.svg"
import "./footer-style.css"
import { Links } from "./list";
export const Footer = () => {
    return (
        <div className="container footer__container">
            <a href="#">
                <img className="footer__img" src={logo} alt="logo" />
            </a>
            <Links text3="Subscriber Agreement"
                text4="Privacy Policy"
                text5="Your California Privacy Rights"
                text6="Do Not Sell My Personal Information"
                text7="Children's Online Privacy Policy"
                text2="English Language"
            />
            <Links text1="Closed Captioning"
                text2="Interest-Based Ads"
                text3="Supported Devices"
                text4="Help"
                text5="Gift Disney+"
                text6="About Us"
                text7="Disney+ Partner Program"
                text8="Disney Bundle"
            />
            <p className="list__link footer__text">
                Content and platform availability may vary by region.
            </p>
            <span className="list__link footer__span">© Disney. All Rights Reserved.</span>
        </div>
    )
}