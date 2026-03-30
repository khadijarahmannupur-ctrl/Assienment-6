import React from 'react';
import ProductCard from './ProductCard';


const Products = ({ products ,cartIncrease, setCartIncrease, cartProducts, setCartProducts}) => {
    // console.log(products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                products.map(product => <ProductCard key={product.id} product={product} cartIncrease={cartIncrease} setCartIncrease={setCartIncrease} cartProducts={cartProducts} setCartProducts={setCartProducts}></ProductCard>)
            }

            
        </div>
    );
};

export default Products;