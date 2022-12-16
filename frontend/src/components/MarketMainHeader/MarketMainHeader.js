import React from "react";
import marketLogo from "../../images/market_logo.svg";
import bugerMenuIcon from "../../images/burger_menu.svg";

import "./MarketMainHeader.css";

const MarketMainHeader = () => {
    return (
        <header id="market-main-header">
            <span id="market-main-header-logo">
                <img src={marketLogo} alt="" />
            </span>
            <button id="market-main-header-catalog-btn">
                <img src={bugerMenuIcon} alt="" />
                <p>Каталог</p>
            </button>

            <div id="search-bar">
                <input type="text" placeholder="Искать товары" />
                <button type="button">Найти</button>
            </div>
        </header>
    );
}

export default MarketMainHeader;