import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Product/CartContext";  // Импортировать ваш контекст корзины

const Product = ({ product }) => {
    const { cart } = useContext(CartContext); // Использовать контекст корзины

    // Проверить, есть ли товар в корзине
    const isInCart = !!cart.find(item => Number(item.id) === Number(product.id));

    // Рассчитать исходную цену (x) до применения скидки
    const priceWithoutDiscount = product.price / (1 - product.discont / 100);

    return (
        <Link to={`/product/${product.id}`} key={product.id} className="product">
            <div className="product__photo">
                <img src={'/api' + product.imageUrl} alt="" />
            </div>
            <div className="product__content">
                <div className="product__title">{product.name}</div>
                <div className="product__price">
                    <div className="r12" style={{ position: 'relative', }}>
                        {product.category === 'discont' && (
                            <span style={{ textDecoration: 'line-through', marginRight: '10px', fontSize:'70%', color: '#ff0000' }}>
                            {priceWithoutDiscount.toFixed(0)} ₸
                        </span>
                        )}
                    </div>
                    <div className="r22">
                        {product.price} <span>₸</span>
                    </div>

                </div>
            </div>

            <Link to={`/product/${product.id}`} className={`product__btn ${isInCart ? 'button-disabled' : ''}`}>
                {isInCart ? "В корзине" : "Купить"}
            </Link>
        </Link>
    );
};

export default Product;
