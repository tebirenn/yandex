import React, { useEffect } from "react";

import "./TravelMainPage.css";

const TravelMainPage = () => {

    useEffect(() => {
        document.title = "Яндекс путешествия";
    }, []);

    return (
        <div id="travel-main">
            <h4>TRAVEL PAGE</h4>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6c249dc68c17a135a4421824952b714dd3eb68f45b73f5ad4576d2f322dd77c7&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
        </div>
    );
}

export default TravelMainPage;