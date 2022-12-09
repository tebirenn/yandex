import React from "react";

import "./ServicesPage.css";
import yandexLogo from "../../images/Yandex_logo_Cyrillic.svg";

const ServicesPage = () => {
    return (
        <secion id="services-page">
            <header>
                <img src={ yandexLogo } alt="" />
                <div id="services-links">
                    <a href="a">Сервисы</a>
                    <a href="a">Приложения</a>
                    <a href="a">Программы</a>
                    <a href="a">Для бизнеса</a>
                </div>
            </header>
        </secion>
    );
}

export default ServicesPage;