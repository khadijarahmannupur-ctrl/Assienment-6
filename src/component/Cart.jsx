import React from 'react';
import { MdDelete } from "react-icons/md";

const Cart = ({ cartProducts, setCartProducts }) => {
    // console.log(cartProducts);
    return (
        <div className='mt-10 border border-gray-200 rounded-2xl p-6'>
            <h1 className='text-2xl font-bold mb-10'>Your Cart</h1>
            {
                cartProducts.map(cartProduct => {
                    return (
                        <div key={cartProduct.id} className='border border-gray-200 flex justify-between items-center p-6 rounded-3xl mb-5'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <img src={cartProduct.icon} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold'>{cartProduct.name}</h3>
                                    <p className='text-[#627382] text-sm'>${cartProduct.price}</p>
                                </div>
                            </div>
                            <button className='btn text-red-500 text-xl rounded-full hover:border-red-400'><MdDelete /></button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;