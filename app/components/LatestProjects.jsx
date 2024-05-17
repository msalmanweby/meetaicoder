'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useRef } from 'react';

function LatestProjects() {
    const [scrollStarted, setScrollStarted] = useState(false);
    const containerRef = useRef(null);

    const myLatesProjeccts = [
        {
            name: "unity",
            content: "A Multi-purposed Dashboard designed to streamline workflows, optimize data visualization, and empower informed decision-making across diverse projects and functionalities.",

            status: "Delivered"
        },
        {
            name: "cascanio",
            content: "An AI-Enabled Gaming Platform engineered to enhance gaming experiences, optimize strategic decision-making, and elevate performance across diverse game genres and functionalities",

            status: "Delivered"
        },
        {
            name: "avapay",
            content: "Avapay leverages advanced AI algorithms to dynamically manage user costs, ensuring optimal spending while maximizing value. By analyzing user behavior, preferences, and consumption patterns in real-time.",

            status: "Pending"
        },
        {
            name: "unity",
            content: "A Multi-purposed Dashboard designed to streamline workflows, optimize data visualization, and empower informed decision-making across diverse projects and functionalities.",

            status: "Delivered"
        },
        {
            name: "cascanio",
            content: "An AI-Enabled Gaming Platform engineered to enhance gaming experiences, optimize strategic decision-making, and elevate performance across diverse game genres and functionalities",

            status: "Delivered"
        },
        {
            name: "avapay",
            content: "Avapay leverages advanced AI algorithms to dynamically manage user costs, ensuring optimal spending while maximizing value. By analyzing user behavior, preferences, and consumption patterns in real-time.",

            status: "Pending"
        },
        //
    ]

    const handleDelayedScroll = () => {
        setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 372; // Adjust the scroll amount as needed
            }
        }, 0);
    };

    return (
        <div className="flex sm:px-6 px-2 py-28 flex-col gap-8">
            <div className='flex items-center justify-between'>
                <div className="text-white">
                    <h1 className="capitalize text-[24px] font-bold leading-none text-center">Latest Projects</h1>
                </div>
                <button className='' onClick={handleDelayedScroll}>
                    <Image src={"/seemore.svg"} width={40} height={40} alt='Meet Ai coders Latest Projects' />
                </button>
            </div>
            <div ref={containerRef} className='flex gap-10 items-center justify-start sm:justify-evenly overflow-x-auto scroll-smooth transition-all duration-500 ease-in-out no-scrollbar'>
                {myLatesProjeccts.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className={`relative h-[348px] w-[320px] sm:h-[400px]  sm:w-[372px] bg-[url('/about/dir/${item.name}.png')]  rounded-xl ${scrollStarted ? 'scroll-started' : ''}`}>
                            <Image src={`/about/dir/${item.name}.png`} width={372} height={400} alt={item.name} />
                            <div className='p-2 absolute bottom-2 right-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,50)]'>
                                <p className='text-white text-[12px] font-semibold'>{item.status}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[320px] sm:w-[372px] text-white capitalize">
                            <h2 className='font-bold text-[20px] text-gray-300 text-center'>
                                {item.name}
                            </h2>
                            <p className='font-normal text-[14px] text-gray-500 hover:text-gray-300 text-center'>
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestProjects
