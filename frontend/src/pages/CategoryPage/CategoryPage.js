import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarketMainHeader from "../../components/MarketMainHeader/MarketMainHeader";
import MarketFooter from "../../components/MarketFooter/MarketFooter";

import "./CategoryPage.css";
import CategoryAside from "../../components/CategoryAside/CategoryAside";
import axios from "axios";
import ProductItem from "../../components/ProductItem/ProductItem";

const CategoryPage = () => {

    let { category } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    axios.post("http://localhost:8000/api/products/category", {"category": category})
        .then(response => setProducts(response.data))

    category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    return (
        <div id="category-page">
            <MarketMainHeader />
            <section>
                <h1 className="category-name">{category}</h1>
                <div id="main">
                    <CategoryAside />
                    <div id="products-list">
                        <div id="filters">
                            <button>По цене</button>
                            <button>По новизне</button>
                        </div>
                        <div>
                            {products.map((item) => (
                                <ProductItem 
                                    key={item.product_id} 
                                    product_id={item.product_id} 
                                    name={item.product_name} 
                                    desc={item.product_description} 
                                    image={item.image_url}
                                    price={item.price}
                                    createdAt={item.created_at}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <MarketFooter />
        </div>
    );
}

export default CategoryPage;