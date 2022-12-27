import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetailPage.css";

const ProductDetailPage = () => {

    const [product, setProduct] = useState({});
    const { product_id } = useParams();

    axios.get(`http://localhost:8000/api/products/${product_id}`)
        .then(response => setProduct(response.data));

    return (
        <div id="product-detail-page">
            {product_id}
        </div>
    );
}

export default ProductDetailPage;