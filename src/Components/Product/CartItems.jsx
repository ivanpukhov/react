import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import NotCart from "../NotFound/NotCart";

const CartItems = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    return (
        <div>
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <NotCart />
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name}
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />
                                шт. - {item.price * item.quantity} ₸
                                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <Link to="/checkout">Перейти к оформлению</Link>
                </>
            )}
        </div>
    );
};

export default CartItems;
