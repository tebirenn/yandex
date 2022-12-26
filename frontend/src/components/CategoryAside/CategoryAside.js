import React from "react";

import "./CategoryAside.css";

const CategoryAside = () => {
    return (
        <aside id="category-aside">
            <div className="aside--item">
                <p>Цена ₸</p>
                <span>
                    <input type="text" placeholder="от" />
                    <input type="text" placeholder="до" />
                </span>
            </div>
            <div className="aside--item">
                <p>Срок доставки</p>
                <span>
                    <input type="radio" className="radio" name="delivery" />
                    <label for="delivery">До 5 дней</label>
                </span>
                <span>
                    <input type="radio" className="radio" name="delivery" />
                    <label for="delivery">Любой</label>
                </span>
            </div>
            <div className="aside--item">
                <p>Производитель</p>
                <span>
                    <input type="checkbox" className="checkbox" name="b1" />
                    <label for="b1">Company_1</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="b2" />
                    <label for="b2">Company_2</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="b3" />
                    <label for="b3">Company_3</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="b4" />
                    <label for="b4">Company_4</label>
                </span>
            </div>
            <div className="aside--item">
                <p>Состоние товара</p>
                <span>
                    <input type="checkbox" className="checkbox" name="new" />
                    <label for="new">Новый</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="resail" />
                    <label for="resail">Ресейл</label>
                </span>
            </div>
            <div className="aside--item">
                <p>Внешний вид</p>
                <span>
                    <input type="checkbox" className="checkbox" name="like-new" />
                    <label for="like-new">Как новый</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="excelent" />
                    <label for="excelent">Отличный</label>
                </span>
                <span>
                    <input type="checkbox" className="checkbox" name="good" />
                    <label for="good">Хороший</label>
                </span>
            </div>

            <button>Все фильтры</button>
        </aside>
    );
}

export default CategoryAside;