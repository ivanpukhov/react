import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Product/CartContext";  // Импортировать ваш контекст корзины

const Product = ({ product }) => {
    const { cart } = useContext(CartContext); // Использовать контекст корзины

    // Проверить, есть ли товар в корзине
    const isInCart = !!cart.find(item => Number(item.id) === Number(product.id));

    return (
        <Link to={`/product/${product.id}`} key={product.id} className="product">
            <div className="product__photo">
                <img src={'/api' + product.imageUrl} alt="" />
            </div>
            <div className="product__content">
                <div className="product__title">{product.name}</div>
                <div className="product__price">{product.price} <span>₸</span></div>
            </div>
            {product.isAvailable ? (
                <Link to={`/product/${product.id}`} className={`product__btn ${isInCart ? 'button-disabled' : ''}`}>
                    {isInCart ? "В корзине" : "Купить"}
                </Link>
            ) : (
                <div className="product__btn button-disabled">
                    Нет в наличии
                </div>
            )}
        </Link>
    );
};

export default Product;
