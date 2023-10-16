import React from "react";
import HomeSlider from "../Home/HomeSlider/HomeSlider";
import Catalog from "../Catalog/Catalog";
import HomeBestProducts from "../Home/HomeProds/HomeBestProducts/HomeBestProducts";
import HomeProducts from "../Home/HomeProds/HomeProducts/HomeProducts";
import HomeCosmetics from "../Home/HomeProds/HomeCosmetics/HomeCosmetics";
import HomeChimiya from "../Home/HomeProds/HomeChimiya/HomeChimiya";

const Home = () => {
    return (
        <>
            <div className="home">
                <HomeSlider/>
                <Catalog/>
            </div>

            <HomeBestProducts/>
            <HomeProducts/>
            <HomeCosmetics/>
            <HomeChimiya/>
        </>
    )
}

export default Home
