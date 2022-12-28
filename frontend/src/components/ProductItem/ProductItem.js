import React from "react";
import { PRODUCT_DETAIL_ROUTE } from "../../utils/consts";

import "./ProductItem.css";

const ProductItem = (props) => {
    return (
        <div className="product-item">
            <div className="image-wrapper"><img src={props.image} alt="" /></div>
            <div>
                <a href={PRODUCT_DETAIL_ROUTE + "/" + props.product_id} className="prd-name">{props.name}</a>
                <p className="prd-desc">{props.desc}</p>
                <p className="prd-created">{props.createdAt}</p>
            </div>
            <div>
                <h3>{props.price} KZT</h3>
                <button>В магазин</button>
            </div>
        </div>
    );
}

export default ProductItem;