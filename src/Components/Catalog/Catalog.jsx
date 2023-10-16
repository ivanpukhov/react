import React from "react";
import {Link} from "react-router-dom";

const Catalog = () => {
    return (<div className="catalog">
        <div className="catalog__title">Каталог</div>
        <div className="catalog__block">
            <Link to="products" className="catalog__item catalog__products">Продукты</Link>
            <Link to="cosmetics" className="catalog__item catalog__cosmetic">Косметика</Link>
            <Link to="products" className="catalog__item catalog__tovar">Хоз. товары</Link>
            <Link to="products" className="catalog__item catalog__dishes">Посуда</Link>
            <Link to="products" className="catalog__item catalog__kpop">Shop</Link>
        </div>
    </div>)
}

export default Catalog
