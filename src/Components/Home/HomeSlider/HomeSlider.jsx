import React from "react";
import action from "../../../assets/img/action.webp";
import banner from "../../../assets/img/banner.webp";

const HomeSlider = () => {
    return(
        <div className="slider">
            <img src={action} alt="" className='btn'/>
            <img src={banner} alt="" className='btb'/>
        </div>
    )
}

export default HomeSlider
