import React from "react";

import "./ServicesItem.css";


const ServicesItem = (props) => {
    return (
        <div className="service--item">
            <img src={props.img} alt="" />
            <span>
                <h4>{props.header}</h4>
                <p>{props.desc}</p>
            </span>
        </div>
    );
}

export default ServicesItem;