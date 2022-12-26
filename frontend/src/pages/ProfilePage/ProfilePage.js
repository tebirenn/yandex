import React from "react";

import "./ProfilePage.css";
import yaTextLogo from "../../images/ya_text_logo.svg";
import yaIdLogo from "../../images/ya_id_logo.svg";
import yaAvatar from "../../images/ya_avatar.png";
import messageIcon from "../../images/messageIcon.svg";
import questionIcon from "../../images/questionIcon.svg";
import { PROFILE_ROUTE } from "../../utils/consts";

const ProfilePage = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div id="profile-page">
            <header>
                <span id="logo">
                    <img src={yaTextLogo} alt="" />
                    <img src={yaIdLogo} alt="" />
                </span>
                <span>
                    <img src={yaAvatar} alt="" />
                </span>
            </header>

            <section>
                <aside>
                    <span></span>
                    <div className="aside-buttons">
                        <img src={messageIcon} alt="" />
                        <p>Поддержка</p>
                    </div>
                    <div className="aside-buttons">
                        <img src={questionIcon} alt="" />
                        <p>Справка</p>
                    </div>
                </aside>
                <div>
                    <div id="profile-info">
                        <h1>Ваши портрет и имя на Яндексе</h1>
                        <div>
                            <img src={yaAvatar} alt="" />
                            <span>
                                <p>Добавьте ваше фото для ответов, комментариев и отзывов</p>
                                <button>Добавить фото</button>
                            </span>
                        </div>
                    
                        <input type="text" defaultValue={user.name + " " + user.surname} placeholder="Имя на Яндексе" />
                        <p>Имя на Яндексе – публичное имя вашего аккаунта. Оно отображается в ваших отзывах, комментариях, оценках или ответах. Если вы измените его, новое имя появится не только в новом, но и в старом контенте.</p>
                        <button>Сохранить</button>
                    </div>
                </div>
            </section>

            <footer>
                <a href={PROFILE_ROUTE}>Ru</a>
                <a href={PROFILE_ROUTE}>Справка</a>
                <a href={PROFILE_ROUTE}><span>© 2022,</span> Яндекс</a>
            </footer>
        </div>
    );
}

export default ProfilePage;