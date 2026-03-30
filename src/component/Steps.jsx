import React from 'react';

const Steps = () => {
    return (
        <div className='my-10 bg-[#f9fafc] py-10 md:py-20'>
            <div className='text-center space-y-6 mx-3'>
                <h1 className='text-3xl md:text-5xl font-bold'> Get Started in 3 Steps</h1>
                <p className='font-extralight'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='w-11/12 md:w-8/12 mx-auto my-10 flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='text-center bg-white shadow py-20 px-5 rounded-2xl relative transition-transform duration-300 ease-in-out 
                hover:scale-105 border border-violet-500 hover:shadow-violet-600'>
                    <span className=" absolute top-2 right-3 text-right mx-3 bg-linear-to-r from-[#672df8] to-[#8a1af9] rounded-full font-bold py-2 px-4 text-white">
                        1
                    </span>


                    <div className='flex justify-center '>
                        <img src='' alt="" />
                    </div>
                    <div className='space-y-2 mt-3'>
                        <h2 className='text-xl font-bold'>
                            Create Account
                        </h2>
                        <p>
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>
                </div>
                <div className='relative text-center bg-white shadow py-20 px-5 rounded-2xl transition-transform duration-300 ease-in-out 
                hover:scale-105 border border-violet-500 hover:shadow-violet-600'>
                    <span className=" absolute top-2 right-3 text-right mx-3 bg-linear-to-r from-[#672df8] to-[#8a1af9] rounded-full font-bold py-2 px-4 text-white">
                        2
                    </span>


                    <div className='flex justify-center '>
                        <img src='' alt="" />
                    </div>
                    <div className='space-y-2 mt-3'>
                        <h2 className='text-xl font-bold '>
                            Choose Products
                        </h2>
                        <p>
                            Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className='relative text-center bg-white shadow py-20 px-5 rounded-2xl transition-transform duration-300 ease-in-out 
                hover:scale-105 border border-violet-500 hover:shadow-violet-600'>
                    <span className=" absolute top-2 right-3 text-right mx-3 bg-linear-to-r from-[#672df8] to-[#8a1af9] rounded-full font-bold py-2 px-4 text-white">
                        3
                    </span>


                    <div className='flex justify-center '>
                        <img src='' alt="" />
                    </div>
                    <div className='space-y-2 mt-3'>
                        <h2 className='text-xl font-bold'>
                            Start Creating
                        </h2>
                        <p>
                            Download and start using your premium tools immediately
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Steps;