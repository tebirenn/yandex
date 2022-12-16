import React from "react";

import "./AuthPage.css";

import bg from "../../images/bg_login.jpg";
import yaLogo from "../../images/logo_yandex.png";

const AuthPage = () => {
    return (
        <div id="auth-page">
            <img id="bg" src={bg} alt="" />
            <div id="form">
                <img src={yaLogo} alt="" />
                <p>Войдите с Яндекс ID, чтобы ваши товары и настройки сохранялись на всех устройствах, с которых вы заходите на Маркет.</p>
                <input type="text" placeholder="Логин" />
                <input type="password" placeholder="Пароль" />
                <button type="button">Войти</button>
            </div>
        </div>
    );
}

export default AuthPage;