import React from 'react';
import dotImg from '../assets/dot_icon.png'
import playImg from '../assets/Play.png'
import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className="relative min-h-162.5 flex items-center overflow-hidden">
                <div className=" mx-auto flex flex-col md:flex-row gap-10 items-center relative z-10 ">
                    {/* Left Content */}
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#e1e7ff] 10 border border-[#c9d2f9] text-[#9215fa] text-sm font-medium px-5 py-2 rounded-full">
                            <img src={dotImg} alt="" />
                             New: AI-Powered Tools Available
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tighter ">
                            Supercharge Your
                            <br />
                            <span className="">
                                Digital Workflow
                            </span>
                        </h1>

                        <p className="text-sm text-zinc-700 max-w-lg ">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                            <button className="bg-linear-to-r from-[#672df8] to-[#8a1af9] px-3 py-2 rounded-full font-semibold text-[16px] shadow-xl shadow-blue-500/30 text-white">
                                Explore Products
                            </button>
                            <button className='px-3 py-2 rounded-full font-semibold text-lg border-2 border-violet-700 text-transparent bg-clip-text bg-linear-to-r from-[#672df8] to-[#8a1af9] flex items-center gap-2'>
                               <img src={playImg} alt=""  />  Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                className="relative object-contain shadow-xl rounded-3xl"
                                src={bannerImg}
                                alt="AI Models Banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;