import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#672df8] to-[#8a1af9] py-4 md:py-10 my-10'>
                <div className='flex flex-col md:flex-row gap-0 md:gap-10 lg:gap-20 justify-center  text-white  text-center'>
                    <div className='space-y-2'>
                        <h1 className='text-3xl md:text-5xl font-bold'>50K+</h1>
                        <p className='text-sm md:text-xl font-light'>Active Users</p>
                    </div>
                    <div className="w-px h-30 bg-white"></div>

                    <div className='space-y-2'>
                        <h1 className='text-3xl md:text-5xl font-bold'>200K+</h1>
                        <p className='text-sm md:text-xl font-light'>Premium Tools</p>
                    </div>

                    <div className="w-px h-30 bg-white"></div>
                    <div className='space-y-2'>
                        <h1 className='text-3xl md:text-5xl font-bold'>4.9</h1>
                        <p className='text-sm md:text-xl font-light'>Rating</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Rating;