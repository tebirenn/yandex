import React from "react";
import { useParams } from "react-router-dom";
import MarketMainHeader from "../../components/MarketMainHeader/MarketMainHeader";
import MarketFooter from "../../components/MarketFooter/MarketFooter";

import "./CategoryPage.css";
import CategoryAside from "../../components/CategoryAside/CategoryAside";

const CategoryPage = () => {

    let { category } = useParams();
    category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    return (
        <div id="category-page">
            <MarketMainHeader />
            <section>
                <h1 className="category-name">{category}</h1>
                <div id="main">
                    <CategoryAside />
                    <div id="products-list">
                        <div>
                            <button>По цене</button>
                            <button>По рейтингу</button>
                        </div>
                    </div>
                </div>
            </section>
            <MarketFooter />
        </div>
    );
}

export default CategoryPage;