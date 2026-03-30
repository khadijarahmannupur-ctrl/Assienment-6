import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';

const ProductCard = ({product, cartIncrease, setCartIncrease, cartProducts, setCartProducts}) => {
    // console.log(product);
    const {name, description, price, period, tag, features, icon} = product;
    const [isPurchase, setIsPurchase] = useState(false);

    const handlePurchase =()=> {
        setIsPurchase(true)  
        
        const isFound = cartProducts.find(item => item.id === product.id);
        if(isFound){
            toast.error('Item is Already Added');
            return;
        }
        
        setCartIncrease(cartIncrease + 1)
        setCartProducts([...cartProducts, product])
        toast.success("Added to Cart Successfully")
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-lg rounded-2xl">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className={`badge badge-xs badge-warning text-sm font-medium py-4 px-4 rounded-3xl ${tag === 'Best Seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' :tag === 'Popular' ? 'bg-[#E1E7FF] border-[#9514FA] text-[#4F39F6]' :'bg-[#DBFCE7] text-[#0A883E] border-[#0A883E]'}`}>{tag}</span>
                    </div>
                    <div className='rounded-full p-3 w-15 border border-gray-200'>
                        <img className='h-8 w-8' src={icon} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p className='text-sm text-[#627382]'>{description}</p>
                        <span className="text-3xl font-bold">${price}<span className='text-sm text-[#627382]'>/{period}</span></span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li className='flex items-center gap-2'>
                            <span className='text-[#30B868]'><FaCheck /></span>
                            <span className='text-sm font-medium text-[#627382]'>{features[0]}</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-[#30B868]'><FaCheck /></span>
                            <span className='text-sm font-medium text-[#627382]'>{features[1]}</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-[#30B868]'><FaCheck /></span>
                            <span className='text-sm font-medium text-[#627382]'>{features[2]}</span>
                        </li>
                        
                    </ul>
                    <div className="mt-6">
                        <button onClick={handlePurchase} className={`btn py-6 btn-block w-full ${isPurchase ? 'bg-[#9514FA] text-white' : 'bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white'} rounded-3xl`}>{isPurchase ? 'Added to Cart' : 'Buy Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;