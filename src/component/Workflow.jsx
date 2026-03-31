import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#672df8] to-[#8a1af9] py-10 md:py-20 '>
            <div>
                <div className='text-center text-white space-y-3 mx-3'>
                    <h1 className='text-3xl text-white md:text-4xl font-bold'> Ready to Transform Your Workflow?</h1>
                    <p className='font-extralight text-sm text-[#ffffffc8]'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                </div>
                <div className="flex justify-center items-center gap-4 pt-4">
                    <button className="bg-white px-5 py-4 rounded-full font-semibold text-sm shadow-xl flex items-center gap-3">
                        <span className='bg-linear-to-r from-[#672df8] to-[#8a1af9] text-transparent bg-clip-text '>Explore Products</span>
                    </button>
                    <button className='flex items-center gap-3 px-6 py-4 rounded-full font-semibold text-sm border border-white  bg-clip-text bg-linear-to-r from-[#672df8] to-[#8a1af9]  text-white'>
                        View Pricing
                    </button>
                </div>
                <div>
                    <p className='text-center  mt-6 font-extralight text-sm text-[#ffffffc8]'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Workflow;