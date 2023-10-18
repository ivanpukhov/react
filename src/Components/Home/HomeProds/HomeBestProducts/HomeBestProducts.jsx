import Products from "../../../Products/Products";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ClipLoader} from "react-spinners";

const HomeBestProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Замените этот URL вашим реальным адресом API
        const apiURL = '/api/products/top/' + props.rout;

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
        return (<div className="dacc">
            <ClipLoader color="#0CE3CB" loading={loading} size={50}/>
        </div>);    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <div className="block__title">
                {props.title}
            </div>
                <Products products={products}/>

        </>
    )
}
export default HomeBestProducts
