import Product from "../Product/Product";
import notFound from "../../assets/img/404.svg";

const Products = ({ products = [] }) => {
    if (!Array.isArray(products)) {
        console.error('Products: prop products is not an array', products);
        return null;
    }
  return(
      <>
          {products.length === 0 ? (
              <div className='notfound'>
                  <img src={notFound} alt=""/>

              </div>
          ) : (
              <div className="products">

                  {products.map((product) => (
                      <Product key={product.id} product={product}/>
                  ))}
              </div>
          )}


      </>
  )
}
export default Products
