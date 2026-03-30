import React from 'react';
import cartImg from '../assets/shopping_cart.png'

const NavBar = ({cartIncrease}) => {
    return (
        <div className='border-b border-gray-200'>
            <div className="navbar bg-base-100 w-full lg:w-11/12 lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sm font-semibold text-[#101727]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <h1 className="text-3xl font-bold bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent">DigiTools</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-sm font-semibold text-[#101727]">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <div className='relative w-10 h-10 rounded-full flex items-center justify-center'>
                    <img src={cartImg} alt="" />
                    {cartIncrease ? <div className={`absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full `}><p className='text-white text-[12px]'>{cartIncrease}</p></div> : ''}
                </div>
                <a className="btn rounded-3xl">Login</a>
                <a className="btn bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white rounded-3xl">Get Started</a>
            </div>
        </div>
        </div>
    );
};

export default NavBar;