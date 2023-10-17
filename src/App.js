import './App.css';

import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from "./Components/Home/Home";
import SearchResult from "./Components/SearchResult/SearchResult";
import NotFound from "./Components/NotFound/NotFound";
import {CartProvider} from './Components/Product/CartContext';
import CartItems from "./Components/Product/CartItems";
import Checkout from "./Components/Product/Checkout";
import OrderSucces from "./Components/NotFound/OrderSucces";
import CheckoutTest from "./Components/Product/CheckoutTest";
import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Routes>
                        {/*поиск*/}
                        <Route path='/search-result' element={<SearchResult/>}/>
                        {/*корзина*/}
                        <Route path='/cart' element={<CartItems/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/checkout-test' element={<CheckoutTest/>}/>
                        <Route path='/order-success' element={<OrderSucces/>}/>
                        {/*Товары по категориям*/}
                        <Route path='/cosmetics' element={<CategoryProducts rout="cosmetics" title="Косметика"/>}/>
                        <Route path='/chimiya' element={<CategoryProducts rout="chimiya" title="Бытовая химия"/>}/>
                        <Route path='/products' element={<CategoryProducts rout="products" title="Продукты"/>}/>
                        {/*главная*/}
                        <Route path='/' element={<Home/>}/>
                        {/*404*/}
                        <Route path='/*' element={<NotFound/>}/>

                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
