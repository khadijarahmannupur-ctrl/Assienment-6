import React, { use, useState } from 'react';
import Products from './Products';
import Cart from './Cart';

const MainSection = ({productsPromise, cartIncrease, setCartIncrease}) => {
    const products = use(productsPromise);
    // console.log(products);
    const [selectedBtn, setSelectedBtn] = useState('products');
    const [cartProducts, setCartProducts] = useState([]);
    
    return (
        <div className='my-25 w-11/12 mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-4'>Premium Digital Tools</h1>
                <p className='text-sm text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div className='flex justify-center gap-4 mt-4'>
                <button onClick={()=> setSelectedBtn('products')} className={`btn ${selectedBtn === 'products' && 'bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white'} rounded-3xl px-10`}>Products</button>
                <button onClick={()=> setSelectedBtn('cart')} className={`btn ${selectedBtn === 'cart' && 'bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white'} rounded-3xl px-10`}>Cart({cartProducts.length})</button>


            </div>
                {selectedBtn === 'products' ? <Products products={products} cartIncrease={cartIncrease} setCartIncrease={setCartIncrease} cartProducts={cartProducts} setCartProducts={setCartProducts}></Products> : <Cart cartProducts={cartProducts} setCartProducts={setCartProducts}></Cart>}
        </div>
    );
};

export default MainSection;