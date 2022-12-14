import React from "react";

import "./ServicesPage.css";
import yandexLogo from "../../images/Yandex_logo_Cyrillic.svg";
import ServicesItem from "../../components/ServicesItem/ServicesItem";

const ServicesPage = () => {

    const services = [
        ["ya.logo.svg", "Поиск", "Ответы на любые вопросы"],
        ["ya.logo.svg", "Картинки", "Изображения всех цветов и размеров"],
        ["ya.logo.svg", "Видео", "Просмотр фильмов, сериалов, телешоу, музыкальных роликов"]
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
            <div>
                {services.map((el) => {
                    <ServicesItem img={el[0]} header={el[1]} desc={el[2]} />
                })}
            </div>
        </section>
    );
}

export default ServicesPage;