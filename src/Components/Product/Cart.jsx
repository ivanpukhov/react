import React from 'react';
import axios from 'axios';
import { useCart } from './CartContext';  // Подразумевается, что CartContext.js находится в той же директории

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, userInfo, updateUserInfo, setCart } = useCart();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateUserInfo(name, value);
    };

    const handleSubmit = async () => {
        const orderData = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            phoneNumber: userInfo.phoneNumber,
            address: userInfo.address,
            products: cart.map((item) => ({
                id: item.id,
                quantity: item.quantity,
            })),
        };

        try {
            const response = await axios.post('http://localhost:3000/api/orders/', orderData);

            if (response.status === 200) {
                console.log('Order created successfully:', response.data);
                setCart([]);  // Очистка корзины после успешного создания заказа
            } else {
                console.error('Failed to create order:', response.data);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
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

                    <h2>Информация о заказчике</h2>
                    <form>
                        <div>
                            <label>Имя:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={userInfo.firstName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Фамилия:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={userInfo.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Номер телефона:</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={userInfo.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Адрес:</label>
                            <input
                                type="text"
                                name="address"
                                value={userInfo.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="button" onClick={handleSubmit}>
                            Отправить заказ
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Cart;
