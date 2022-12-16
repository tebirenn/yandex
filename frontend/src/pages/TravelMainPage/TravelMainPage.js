import React, { useEffect } from "react";

import "./TravelMainPage.css";

const TravelMainPage = () => {

    useEffect(() => {
        document.title = "Яндекс путешествия";
    }, []);

    return (
        <div id="travel-main">
            <h4>TRAVEL PAGE</h4>
        </div>
    );
}

export default TravelMainPage;