import React from "react";
import "./plan-style.css"
import logo1 from "../../../images/disney_1.svg"
import logo2 from "../../../images/disney_2.svg"

import { Card } from "./cards/card";
export const Plan = (user) => {
    return (
        <div className="plan">
            <div className="plan__container container">
                <div className="plan__block">
                    <h2 className="plan__title">Choose Your Plan</h2>
                    <p className="plan__text">Switch or cancel* anytime.</p>
                    <div className="plan__switcher">
                        <button className="switcher__btn">Disney Bundle</button>
                        <button className="switcher__btn">Disney+</button>
                    </div>
                    <div className="plan__cards">
                        <Card img={logo1} name="Duo Basic" span="With Ads" cost="$9.99" />
                        <Card img={logo2} text1="Live sports and Originals on ESPN+" name="Trio Basic" span="With Ads" cost="$12.99" />
                        <Card img={logo2} text1="Live sports and Originals on ESPN+" text2="Downloads to watch on-the-go" name="Trio Premium" span="No Ads on Disney+ & Hulu" cost="$19.99" />
                    </div>
                </div>
                <p className="plan__txt">*Effective at the end of the billing period.
                    <span className="plan__txt_span">Terms apply.</span></p>
            </div>
        </div>
    )
}