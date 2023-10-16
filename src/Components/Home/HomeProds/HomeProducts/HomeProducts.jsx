import Products from "../../../Products/Products";
import React, {useEffect, useState} from "react";
import axios from "axios";

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Замените этот URL вашим реальным адресом API
        const apiURL = 'http://localhost:3000/api/products/top/cosmetics';

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
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <div className="block__title">
                Продукты
            </div>
            <Products products={products}/>

        </>
    )
}
export default HomeProducts
