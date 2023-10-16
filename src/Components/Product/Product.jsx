import { CartContext } from './CartContext';
import { useContext } from 'react';

const Product = ({product}) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
    };
    return (
        <div key={product.id} className="product">
            <div className="product__photo">
                <img src={'http://localhost:3000/api' + product.imageUrl} alt=""/>

            </div>
            <div className="product__content">
                <div className="product__title">{product.name}</div>
                <div className="product__price">{product.price} <span>₸</span></div>
            </div>
            <div className="product__btn" onClick={handleAddToCart}>
                В корзину
            </div>
        </div>


    )
}

export default Product
