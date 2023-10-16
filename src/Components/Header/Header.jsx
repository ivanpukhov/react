import logo from "../../assets/img/logo.svg";
import cart from "../../assets/img/cart.svg";
import hum from "../../assets/img/hum.svg";
import favorite from "../../assets/img/favorite.svg";
import Search from "./Search";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <div className="header__container">
                <Link to={'/'} className="header__logo">
                    <img src={logo} alt=""/>
                </Link>
                <div className="header__btn hum__btn dnm">
                    <div className="before__img"><img src={hum} alt=""/></div>

                    Каталог
                </div>
                <Search />

                <Link to={'/cart'} className="header__btn cart__btn dnm">
                    <div className="before__img"><img src={cart} alt=""/></div>
                    Корзина
                </Link>
                <div className="header__btn like__btn">
                    <img src={favorite} alt=""/>
                </div>
            </div>
        </header>


    )
}

export default Header
