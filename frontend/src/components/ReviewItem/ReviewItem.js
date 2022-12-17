import React from "react";

import "./ReviewItem.css";
import starIcon from "../../images/star_icon.svg";

const ReviewItem = (props) => {
    return (
        <div className="review--item">
            <div className="img-and-rating">
                <img src={props.image} alt="" />
                <div>
                    <span className="stars">
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                    </span>
                </div>
            </div>
            <div className="desc-and-author">
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default ReviewItem;