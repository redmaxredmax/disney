import React from "react";

export const List = (quest) => {
    return (
        <div className="quest__box">
            <p className="quest__name">
                {quest.name}
            </p>
            <button className="quest__btn">
            </button>
        </div>
    )
}