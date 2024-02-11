import React from "react";
import "./questions.css"
import { List } from "./list";
export const Questions=()=>{
    return(
        <div className="container questions__container">
            <h2 className="questions__title">Frequently Asked Questions</h2>
            <ul className="questions__list">
                <li className="questions__item">
                    <List name="What is Disney+?"/>
                </li>
                <li className="questions__item">
                    <List name="How much does Disney+ cost?"/>
                </li>
                <li className="questions__item">
                    <List name="What can I watch on Disney+?"/>
                </li>
                <li className="questions__item">
                    <List name="Where can I watch Disney+?"/>
                </li>
                <li className="questions__item">
                    <List name="What's included on the Disney+ plans with and without ads?"/>
                </li>
                <li className="questions__item">
                    <List name="What is the Disney Bundle?"/>
                </li>
            </ul>
        </div>
    )
}