import './App.css';

import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from "./Components/Home/Home";
import Cosmetics from "./Components/Cosmetics/Cosmetics";
import Search from "./Components/Header/Search";
import SearchResult from "./Components/SearchResult/SearchResult";
import NotFound from "./Components/NotFound/NotFound";
import {CartProvider} from './Components/Product/CartContext';
import Cart from "./Components/Product/Cart";
import CartItems from "./Components/Product/CartItems";
import Checkout from "./Components/Product/Checkout";
import OrderSucces from "./Components/NotFound/OrderSucces";
import CheckoutTest from "./Components/Product/CheckoutTest";
import Chimiya from "./Components/Chimiya/Chimiya";
import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path='/cosmetics' element={<Cosmetics/>}/>
                        <Route path='/search-result' element={<SearchResult/>}/>
                        <Route path='/cart' element={<CartItems/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/checkout-test' element={<CheckoutTest/>}/>
                        <Route path='/order-success' element={<OrderSucces/>}/>
                        <Route path='/chimiya' element={<Chimiya/>}/>
                        <Route path='/products' element={<CategoryProducts/>}/>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/*' element={<NotFound/>}/>

                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
