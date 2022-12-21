import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RegisterPage.css";

import bg from "../../images/bg_login.jpg";
import yaLogo from "../../images/logo_yandex.png";
import { AUTH_ROUTE } from "../../utils/consts";

const RegisterPage = () => {

    const navigate = useNavigate();
    const [page, setPage] = useState(0);

    const formTitles = [
        "Введите номер телефона для создания Яндекс ID",
        "Укажите имя и фамилию",
        "Придумайте логин для Яндекс ID",
        "Придумайте пароль для Яндекс ID"
    ];

    return (
        <div id="reg-page">
            <img id="bg" src={bg} alt="" />
            <div id="form">
                <img src={yaLogo} alt="" />
                <p>{formTitles[page]}</p>
                <input type="text" defaultValue="+7" />
                <button 
                    className="next-btn" 
                    type="button" 
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                    }}
                >Далее</button>
                <a href={AUTH_ROUTE}>Уже есть аккаунт</a>
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

export default RegisterPage;
