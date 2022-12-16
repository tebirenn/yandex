import React, { useEffect } from "react";
import MarketMainHeader from "../../components/MarketMainHeader/MarketMainHeader";

import "./MarketMainPage.css";

const MarketMainPage = () => {

    useEffect(() => {
        document.title = "Интернет-магазин Яндекс";
    }, []);

    return (
        <section id="market-main">
            <MarketMainHeader />
        </section>
    );
}

export default MarketMainPage;