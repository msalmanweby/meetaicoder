import { Content } from 'next/font/google'
import React from 'react'

function ServiceCard() {
    const services = [
        {
            name: "Customer Support Agents",
            content: "Unlock the power of self-hosted Learning Management Systems (LMS) to create engaging, interactive learning experiences for your employees or clients.",
            image: "/services/.png"
        },
        {
            name: "Customer Support Agents",
            content: "Unlock the power of self-hosted Learning Management Systems (LMS) to create engaging, interactive learning experiences for your employees or clients.",
            image: "/services/.png"
        },
        {
            name: "Customer Support Agents",
            content: "Unlock the power of self-hosted Learning Management Systems (LMS) to create engaging, interactive learning experiences for your employees or clients.",
            image: "/services/.png"
        }
    ]
    return (
        <div div className='grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10' >
            {
                services.map((item, index) => (
                    <div key={index} className='flex flex-col min-w-full min-h-[400px] p-8 gap-4 items-center justify-between bg-gray-700 rounded-[30px] shrink-0'>
                        <div className='flex'>
                            <h1 className='text-[20px] font-bold text-white capitalize not-italic'>
                                {item.name}
                            </h1>
                        </div>
                        <div className='flex text-left'>
                            <p className='text-[14px] font-medium text-white not-italic'>{item.content}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ServiceCard