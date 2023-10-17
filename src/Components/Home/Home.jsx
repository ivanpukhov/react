import React from "react";
import HomeSlider from "../Home/HomeSlider/HomeSlider";
import Catalog from "../Catalog/Catalog";
import HomeBestProducts from "../Home/HomeProds/HomeBestProducts/HomeBestProducts";

const Home = () => {
    return (
        <>
            <div className="home">
                <HomeSlider/>
                <Catalog/>
            </div>

            <HomeBestProducts rout='' title='Топ товары'/>
            <HomeBestProducts rout='products' title='Продукты'/>
            <HomeBestProducts rout='cosmetics' title='Косметика'/>
            <HomeBestProducts rout='chimiya' title='Бытовая химия>'/>
        </>
    )
}

export default Home
