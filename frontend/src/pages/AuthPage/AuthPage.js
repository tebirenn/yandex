import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./AuthPage.css";

import bg from "../../images/bg_login.jpg";
import yaLogo from "../../images/logo_yandex.png";
import arrowLeftIcon from "../../images/left_arrow.svg";
import { MARKET_MAIN_ROUTE, REGISTER_ROUTE } from "../../utils/consts";
import axios from "axios";

const AuthPage = () => {

    useEffect(() => {
        document.title = "Авторизация";
    }, []);

    const navigate = useNavigate();

    const getFormData = () => {
        const formLogin = document.getElementById("form-login").value;
        const formPassword = document.getElementById("form-password").value;
            
        axios.post("http://localhost:8000/api/users/login", {login: formLogin, password: formPassword})
            .then(response => formResult(response.data));

    }

    const formResult = (data) => {
        if (data.login) {
            localStorage.setItem("user", JSON.stringify(data));
            navigate(MARKET_MAIN_ROUTE);
        } else {
            console.log("user not found or incorrect password");
        }
    }

    return (
        <div id="auth-page">
            <img id="bg" src={bg} alt="" />
            <div id="form">
                <img src={yaLogo} alt="" />
                <p>Войдите с Яндекс ID, чтобы ваши товары и настройки сохранялись на всех устройствах, с которых вы заходите на Маркет.</p>
                <input type="text" id="form-login" name="login" placeholder="Логин" />
                <input type="password" id="form-password" name="password" placeholder="Пароль" />
                <button className="login-btn" type="button" onClick={getFormData}>Войти</button>
                <button className="reg-btn" type="button" onClick={() => navigate(REGISTER_ROUTE)}>Создать ID</button>
                <button className="go-back-btn" type="button" onClick={() => navigate(MARKET_MAIN_ROUTE)}><img src={arrowLeftIcon} alt="" /></button>
            </div>
            <p id="form-after">Яндекс ID — ключ от всех сервисов <br/><a href=".">Узнать больше</a></p>
            <footer>
                <a href=".">Используйте режим инкогнито на чужом компьютере</a>
                <span>
                    <a href=".">Ru</a>
                    <a href=".">Справка и поддержка</a>
                    <p>© 2022, <a href=".">Яндекс</a></p>
                </span>
            </footer>
        </div>
    );
}

export default AuthPage;