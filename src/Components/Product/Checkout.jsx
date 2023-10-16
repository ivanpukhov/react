import React from 'react';
import { useCart } from './CartContext';
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';

const Checkout = () => {
    const { cart, userInfo, updateUserInfo, setCart } = useCart();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateUserInfo(name, value);
    };

    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);




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
                navigate('/order-success');  // Перенаправление пользователя на страницу с подтверждением заказа
            } else {
                console.error('Failed to create order:', response.data);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <h2>Оформление заказа</h2>
            Общее количество товаров: {totalItems} шт.

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
                <div>
                    Общая стоимость: {totalCost} ₸
                </div>
                <button type="button" onClick={handleSubmit}>
                    Оформить заказ
                </button>
            </form>
            <Link to="/cart">Вернуться в корзину</Link>
        </div>
    );
};

export default Checkout;
