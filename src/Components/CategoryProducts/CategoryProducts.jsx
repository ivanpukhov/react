import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../Products/Products";
import {ClipLoader} from "react-spinners";

const CategoryProducts = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(30); // новый state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Замените этот URL вашим реальным адресом API
        const apiURL = 'http://localhost:3000/api/products/category/products';

        axios.get(apiURL)
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="dacc">
                <ClipLoader color="#0CE3CB" loading={loading} size={50}/>

            </div>
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Отфильтровать продукты
    const displayedProducts = products.slice(0, visibleProducts);

    return (
        <>
            <div className="block__title">Косметика</div>
            <Products products={displayedProducts} />
            {visibleProducts < products.length && (
                <button
                    onClick={() => setVisibleProducts(visibleProducts + 30)}
                    className="show-more-button"
                >
                    Показать ещё
                </button>
            )}
        </>
    );
};

export default CategoryProducts;
