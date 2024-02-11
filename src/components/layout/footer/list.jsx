import React from "react";

export const Links=(list)=>{
    return(
        <ul className="list__box">
            <li className="list__item">
                <a className="list__link" href="#">{list.text1}</a>
            </li>
            <li className="list__item">
                <a className="list__link" href="#">{list.text2}</a>
            </li>
            <li className="list__item">
                <a className="list__link" href="#">{list.text3}</a>
            </li>
            <li className="list__item">
                <a className="list__link" href="#">{list.text4}</a>
            </li>
            <li className="list__item">
                <a className="list__link" href="#">{list.text5}</a>
            </li>
            <li className="list__item">
                <a className="list__link" href="#">{list.text6}</a>
            </li>
            <li className="list__item">
                <a className="list__link" href="#">{list.text7}</a>
            </li>
            <li className="list__item">
                <a className="list__link" href="#">{list.text8}</a>
            </li>
        </ul>
    )
}