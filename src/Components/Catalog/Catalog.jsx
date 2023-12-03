import React from "react";
import {Link} from "react-router-dom";

const Catalog = () => {
    return (<div className="catalog">
        <div className="catalog__title">Каталог</div>
        <div className="catalog__block">
            <Link to="products" className="catalog__item catalog__products">Продукты</Link>
            <Link to="cosmetics" className="catalog__item catalog__cosmetic">Косметика</Link>
            <Link to="chimiya" className="catalog__item catalog__tovar">Бытовая химия</Link>
            <Link to="posuda" className="catalog__item catalog__dishes">Посуда</Link>
            <Link to="head" className="catalog__item catalog__kpop">Уход за волосами</Link>
            <Link to="bads" className="catalog__item catalog__bads">БАДы</Link>

        </div>
    </div>)
}

export default Catalog
