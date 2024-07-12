import React from "react";
import {Link} from "react-router-dom";
import './catalog.css'
const CatalogPage = () => {
    return (
        <div className="catalogPage">
            <div className="catalog__title">Каталог</div>
            <div className="catalogPage__block">
                <Link to="/products" className="catalogPage__item ">Продукты</Link>
                <Link to="/cosmetics" className="catalogPage__item ">Косметика</Link>
                <Link to="/chimiya" className="catalogPage__item ">Бытовая химия</Link>
                <Link to="/head" className="catalogPage__item ">Уход за волосами</Link>
                <Link to="/body" className="catalogPage__item ">Уход за телом</Link>
                <Link to="/posuda" className="catalogPage__item ">Посуда</Link>
                <Link to="/bads" className="catalogPage__item ">Бады</Link>
                <Link to="/others" className="catalogPage__item ">Прочие товары</Link>
                <Link to="/discont" className="catalogPage__item ">Товары со скидкой до 50%</Link>
                <Link to="/finished" className="catalogPage__item ">Готовая продукция</Link>
            </div>
        </div>)
}

export default CatalogPage
