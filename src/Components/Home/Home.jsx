import React from "react";
import HomeSlider from "../Home/HomeSlider/HomeSlider";
import Catalog from "../Catalog/Catalog";
import HomeBestProducts from "../Home/HomeProds/HomeBestProducts/HomeBestProducts";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>

            <div className="home">
                <HomeSlider/>
                <Catalog/>
                <a href='https://wa.me/77020581667' className='wame' target='_blank'>Связаться с менеджером</a>
                <div className="catalog__title mt20">Акция</div>
                <div className="catalog__block db">
                    <Link to="product/337" className="catalog__act catalog__action"></Link>

                </div>
            </div>

            <HomeBestProducts rout='' title='Топ товары'/>
            <HomeBestProducts rout='products' title='Продукты'/>
            <HomeBestProducts rout='cosmetics' title='Косметика'/>
            <HomeBestProducts rout='chimiya' title='Бытовая химия>'/>
        </>
    )
}

export default Home
