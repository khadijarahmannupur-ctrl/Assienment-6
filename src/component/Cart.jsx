import React from 'react';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const Cart = ({ cartProducts, setCartProducts, cartIncrease, setCartIncrease }) => {
    // console.log(cartProducts);

    const handelDeleteProduct = (cartProduct) => {
        toast.success('Deleted From Cart')
        console.log(cartProduct);
        const filterProduct = cartProducts.filter(item => item.id !== cartProduct.id);
        setCartProducts(filterProduct);
        setCartIncrease(cartIncrease - 1)
    }
    const cartTotal = cartProducts.reduce((sum, cartProducts) => sum + cartProducts.price, 0);
    const handelPayment =()=> {
        toast.success('Payment Successful')
        setCartProducts([])
        setCartIncrease('')
    }
    return (
        <>
            <div className='mt-10 border border-gray-200 rounded-2xl p-6'>
                <h1 className='text-2xl font-bold mb-10'>Your Cart</h1>

                <div>
                    {cartProducts.length === 0 ?
                        <div className='h-50 flex justify-center items-center'>
                            <h2 className='text-2xl font-bold text-[#627382]'>Your Cart is Empty</h2>
                        </div>
                        :
                        <>
                            {
                                cartProducts.map(cartProduct => {
                            return (
                                <div key={cartProduct.id} className='border border-gray-200 flex justify-between items-center p-6 rounded-3xl mb-5'>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <img className='w-8 h-8' src={cartProduct.icon} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='text-lg font-semibold'>{cartProduct.name}</h3>
                                            <p className='text-[#627382] text-sm'>${cartProduct.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handelDeleteProduct(cartProduct)} className='btn text-red-500 text-xl hover:border-red-400'><MdDelete /></button>
                                </div>
                                    )
                                })
                            }
                            <div className='border border-gray-200 rounded-2xl flex justify-between items-center p-6'>
                                <h3 className='text-2xl font-bold text-[#627382]'>Total</h3>
                                <h3 className='text-2xl font-bold'>${cartTotal}</h3>
                            </div>
                            <div>
                                <button onClick={handelPayment} className={`btn mt-5 py-6 btn-block w-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white rounded-3xl`}>Proceed to Checkout</button>
                            </div>
                        </>
                    }
                </div>

            </div>
        </>

    );
};

export default Cart;

