import './App.css';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import React from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';

import Home from "./Components/Home/Home";
import SearchResult from "./Components/SearchResult/SearchResult";
import NotFound from "./Components/NotFound/NotFound";
import {CartProvider} from './Components/Product/CartContext';
import Checkout from "./Components/Product/Checkout";
import OrderSucces from "./Components/NotFound/OrderSucces";
import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import FavoriteProducts from "./Components/Product/FavoriteProducts";
import {FavoritesProvider} from "./Components/Product/FavoritesContext";
import CatalogPage from "./Components/CatalogPage/CatalogPage";

function App() {
    return (
        <CartProvider>
            <FavoritesProvider>
                <BrowserRouter>
                    <AppContent/>
                </BrowserRouter>
            </FavoritesProvider>
        </CartProvider>
    );
}

const AppContent = () => {
    const location = useLocation();
    const hideHeader = location.pathname.startsWith('/product/');
    const hidefooter = location.pathname.startsWith('/product/');

    return (
        <>


            {!hideHeader && <Header />}
            <div className="container">
                <Routes>
                    <Route path='/search-result' element={<SearchResult/>}/>
                    <Route path='/cart' element={<Checkout/>}/>
                    <Route path='/favorite' element={<FavoriteProducts/>}/>
                    <Route path='/order-success' element={<OrderSucces/>}/>
                    <Route path='/cosmetics' element={<CategoryProducts rout="cosmetics" title="Косметика"/>}/>
                    <Route path='/chimiya' element={<CategoryProducts rout="chimiya" title="Бытовая химия"/>}/>
                    <Route path='/products' element={<CategoryProducts rout="products" title="Продукты"/>}/>
                    <Route path='/head' element={<CategoryProducts rout="head" title="Уход за волосами"/>}/>
                    <Route path='/bads' element={<CategoryProducts rout="bads" title="БАДы"/>}/>
                    <Route path='/others' element={<CategoryProducts rout="others" title="Прочие товары"/>}/>
                    <Route path='/posuda' element={<CategoryProducts rout="posuda" title="Посуда"/>}/>
                    <Route path='/discont' element={<CategoryProducts rout="discont" title="Товары со скидкой до 50%"/>}/>
                    <Route path='/body' element={<CategoryProducts rout="body" title="Уход за телом"/>}/>
                    <Route path='/finished' element={<CategoryProducts rout="finished" title="Готовая продукция"/>}/>
                    <Route path='/product/:id' element={<ProductDetail/>}/>
                    <Route path='/catalog' element={<CatalogPage/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </div>
            {!hideHeader && <Footer/>}

        </>
    );
};

export default App;
