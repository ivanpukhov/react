import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from "../Product/CartContext";
import './detail.css';
import { useFavorites } from "../Product/FavoritesContext";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isInCart, setIsInCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { cart, addToCart } = useContext(CartContext);

    const { favoriteProducts, addToFavorites, removeFromFavorites } = useFavorites();
    const isInFavorites = favoriteProducts.some(item => item.id === product?.id);

    const handleAddToFavorites = () => {
        if (product) addToFavorites(product);
    };

    const handleRemoveFromFavorites = () => {
        if (product) removeFromFavorites(product.id);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    useEffect(() => {
        const productInCart = cart.find(item => Number(item.id) === Number(id));
        setIsInCart(!!productInCart);
    }, [cart, id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/products/${id}`);
                if (response.data) {
                    setProduct(response.data);
                } else {
                    setError('Товар не найден');
                }
            } catch (err) {
                setError('Не удалось загрузить данные');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({ ...product, quantity: Number(quantity) });
            setIsInCart(true);
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const priceWithoutDiscount = product?.discont ? product.price / (1 - product.discont / 100) : null;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className='detail_pc'>
            <div className="detail">
                <div className="detail__bar">
                    <div className='detail__back' onClick={handleGoBack}>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="10" fill="#C6ECE8" />
                            <path d="M26.2188 13.5625L17.7812 22L26.2188 30.4375" stroke="#0CE3CB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="detail__title">
                        {product.name}
                    </div>
                    <div className="detail__favorite">
                        {isInFavorites ? (
                            <div onClick={handleRemoveFromFavorites}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="44" height="44" rx="10" fill="#C6ECE8" />
                                    <path d="M26.6875 12.625C24.8041 12.625 23.1325 13.3684 22 14.6463C20.8675 13.3684 19.1959 12.625 17.3125 12.625C15.6721 12.627 14.0994 13.2795 12.9395 14.4395C11.7795 15.5994 11.127 17.1721 11.125 18.8125C11.125 25.5944 21.0447 31.0131 21.4666 31.2409C21.6305 31.3292 21.8138 31.3754 22 31.3754C22.1862 31.3754 22.3695 31.3292 22.5334 31.2409C22.9553 31.0131 32.875 25.5944 32.875 18.8125C32.873 17.1721 32.2205 15.5994 31.0605 14.4395C29.9006 13.2795 28.3279 12.627 26.6875 12.625ZM26.1728 25.9713C24.8671 27.0792 23.4714 28.0764 22 28.9525C20.5286 28.0764 19.1329 27.0792 17.8272 25.9713C15.7956 24.2284 13.375 21.5706 13.375 18.8125C13.375 17.7682 13.7898 16.7667 14.5283 16.0283C15.2667 15.2898 16.2682 14.875 17.3125 14.875C18.9812 14.875 20.3781 15.7563 20.9584 17.1756C21.0429 17.3825 21.1871 17.5596 21.3726 17.6842C21.5581 17.8089 21.7765 17.8755 22 17.8755C22.2235 17.8755 22.4419 17.8089 22.6274 17.6842C22.8129 17.5596 22.9571 17.3825 23.0416 17.1756C23.6219 15.7563 25.0188 14.875 26.6875 14.875C27.7318 14.875 28.7333 15.2898 29.4717 16.0283C30.2102 16.7667 30.625 17.7682 30.625 18.8125C30.625 21.5706 28.2044 24.2284 26.1728 25.9713Z" fill="#0CE3CB" />
                                </svg>
                            </div>
                        ) : (
                            <div onClick={handleAddToFavorites}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="44" height="44" rx="10" fill="#C6ECE8" />
                                    <g clipPath="url(#clip0_0_1)">
                                        <path d="M26.6875 12.625C24.8041 12.625 23.1325 13.3684 22 14.6463C20.8675 13.3684 19.1959 12.625 17.3125 12.625C15.6721 12.627 14.0994 13.2795 12.9395 14.4395C11.7795 15.5994 11.127 17.1721 11.125 18.8125C11.125 25.5944 21.0447 31.0131 21.4666 31.2409C21.6305 31.3292 21.8138 31.3754 22 31.3754C22.1862 31.3754 22.3695 31.3292 22.5334 31.2409C22.9553 31.0131 32.875 25.5944 32.875 18.8125C32.873 17.1721 32.2205 15.5994 31.0605 14.4395C29.9006 13.2795 28.3279 12.627 26.6875 12.625ZM26.1728 25.9713C24.8671 27.0792 23.4714 28.0764 22 28.9525C20.5286 28.0764 19.1329 27.0792 17.8272 25.9713C15.7956 24.2284 13.375 21.5706 13.375 18.8125C13.375 17.7682 13.7898 16.7667 14.5283 16.0283C15.2667 15.2898 16.2682 14.875 17.3125 14.875C18.9812 14.875 20.3781 15.7563 20.9584 17.1756C21.0429 17.3825 21.1871 17.5596 21.3726 17.6842C21.5581 17.8089 21.7765 17.8755 22 17.8755C22.2235 17.8755 22.4419 17.8089 22.6274 17.6842C22.8129 17.5596 22.9571 17.3825 23.0416 17.1756C23.6219 15.7563 25.0188 14.875 26.6875 14.875C27.7318 14.875 28.7333 15.2898 29.4717 16.0283C30.2102 16.7667 30.625 17.7682 30.625 18.8125C30.625 21.5706 28.2044 24.2284 26.1728 25.9713Z" fill="#0CE3CB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1">
                                            <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
                <div className="detail__content">
                    <div className="detail__photo">
                        <img src={'/api' + product.imageUrl} alt={product.name} />
                    </div>
                    <div className="detail__name">
                        {product.name}
                    </div>
                    <div className="detail__price">
                        <div className="detail__price-small">
                            При покупке на сайте
                        </div>
                        <div className="detail__price-content">
                            <div className="detail__price-price">
                                {product.price} ₸
                            </div>
                            <div className="detail__price-procent">

                                - {product.discont}%
                            </div>
                            <div className="detail__price-line">
                                {product.discont ? (
                                    <>
                                        {priceWithoutDiscount?.toFixed(0)} ₸

                                    </>
                                ) : (
                                    `${product.price} ₸`
                                )}
                            </div>
                        </div>

                    </div>

                </div>

                <div className="detail__about">
                    <div className="detail__about-title">
                        О товаре
                    </div>

                    <div className="detail__price-text">
                        {product.description}
                    </div>
                </div>
                {product.isAvailable ? (
                    <>
                        <div className="checkout__input">
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                placeholder="Количество"
                                onChange={handleQuantityChange}
                                min="1"
                                className="checkout__input-item"
                            />
                        </div>
                        <div className={`detail__btn ${isInCart ? 'button-disabled' : ''}`}
                             onClick={isInCart ? null : handleAddToCart}>
                            {isInCart ? "Уже в корзине" : "В корзину"}
                        </div>
                        <Link to="/cart" className={`detail__btn ${isInCart ? '' : 'disn'}`}>Перейти в корзину</Link>
                    </>
                ) : (
                    <div className="detail__availability">
                        Нет в наличии
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
