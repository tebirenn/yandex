import React from "react";
import PlusHeader from "../../components/PlusHeader/PlusHeader";

import "./PlusPage.css";
import bg1 from "../../images/universal-card.webp";

const PlusPage = () => {
    return (
        <div id="plus-main">
            <PlusHeader />

            <section>
                <div>
                    <h1>Мастерская подарков Плюса</h1>
                    <p>Помощники Плюса приготовили для вас подарки. Много подарков. Для каждого — разные</p>
                    <p>Оформите подписку и смотрите, какой подарок попадётся вам. А ещё смотрите Кинопоиск, слушайте Музыку и копите баллы Плюса за поездки и заказы</p>
                    <button>1499₸ в месяц</button>
                </div>
            </section>

        </div>
    );
}

export default PlusPage;