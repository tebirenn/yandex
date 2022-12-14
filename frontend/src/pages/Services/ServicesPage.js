import React from "react";

import "./ServicesPage.css";
import yandexLogo from "../../images/Yandex_logo_Cyrillic.svg";
import ServicesItem from "../../components/ServicesItem/ServicesItem";

import img1 from "../../images/services-items/img1.svg";
import img2 from "../../images/services-items/img2.svg";
import img3 from "../../images/services-items/img3.svg";
import img4 from "../../images/services-items/img4.svg";
import img5 from "../../images/services-items/img5.svg";
import img6 from "../../images/services-items/img6.svg";
import img7 from "../../images/services-items/img7.svg";
import img8 from "../../images/services-items/img8.svg";
import img9 from "../../images/services-items/img9.svg";

const ServicesPage = () => {

    const services = [
        [img1, "Поиск", "Ответы на любые вопросы"],
        [img2, "Картинки", "Изображения всех цветов и размеров"],
        [img3, "Видео", "Просмотр фильмов, сериалов, телешоу, музыкальных роликов"],
        [img4, "Погода", "Прогноз в вашем городе и по всему миру"],
        [img5, "Карты", "Поиск мест, транспорт и навигация в городе"],
        [img6, "Почта", "Электронный ящик без спама и вирусов"],
        [img7, "Маркет", "Товары, сравнение цен, отзывы покупателей"],
        [img8, "Яндекс Браузер", "Простой и безопасный интернет"]
    ];

    return (
        <section id="services-page">
            <header>
                <img src={ yandexLogo } alt="" />
                <div id="services-links">
                    <a href="a">Сервисы</a>
                    <a href="a">Приложения</a>
                    <a href="a">Программы</a>
                    <a href="a">Для бизнеса</a>
                </div>
            </header>
            <div className="service-items-list">
                {services.map((list) => (
                     <ServicesItem key={list[1]} img={list[0]} header={list[1]} desc={list[2]} />
                ))}
            </div>
        </section>
    );
}

export default ServicesPage;