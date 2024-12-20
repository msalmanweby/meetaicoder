'use client'
import { Content } from 'next/font/google'
import React from 'react'
import Image from 'next/image'

export const services = [
    {
        name: "Customer Support Chating Agents (Industry-Specific)",
        content: "Customized chatbots for specific industries such as retail, e-commerce. These agents can handle common customer queries, troubleshoot issues, and provide relevant information.",
        image: "/services/0.jpg"
    },
    {
        name: "Medical And Healthcare Agents",
        content: "virtual assistants for medical and healthcare sectors. They assist with patient inquiries, offer guidance on health issues, and provide relevant medical information.",
        image: "/services/1.jpg"
    },
    {
        name: "Virtual Travel Booking Agents",
        content: "chatbots for travel bookings. They assist with itinerary planning, booking flights, hotels, and other travel arrangements, and provide relevant travel information and recommendations.",
        image: "/services/2.jpg"
    },
    {
        name: "Automated Financial Investing Agents",
        content: "Specialized chatbots for financial investment tasks. They handle common queries, offer investment advice, and provide relevant financial information to users.",
        image: "/services/3.jpg"
    },
    {
        name: "Legal Document Review Agents",
        content: "chatbots for legal document scrutiny. They assist in reviewing legal documents, identifying key points, and providing relevant information and recommendations based on legal standards and requirements.",
        image: "/services/4.jpg"
    },
    {
        name: "Educational Quiz Masters",
        content: "quiz-based learning apps that test users’ knowledge on various topics. These agents can adapt difficulty levels and provide explanations for correct answers.",
        image: "/services/5.jpg"
    },
    {
        name: "Virtual Personal Shoppers",
        content: "An assistant that recommends clothing, accessories, or home decor items based on user preferences, style, and budget",
        image: "/services/6.jpg"
    },
    {
        name: "Real Estate Property",
        content: "An assistant that help users discover properties for sale or rent based on location, price range, and specific features (e.g., number of bedrooms, amenities).",
        image: "/services/7.jpg"
    }
]
function ServiceCard({ showAll }) {

    const displayedServices = showAll ? services : services.slice(0, 4);

    return (

        <div className='grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10' >
            {
                displayedServices.map((item, index) => (

                    <div key={index} className=" flex flex-col min-w-full min-h-[400px] p-8 gap-4 items-center justify-between rounded-[30px] shrink-0"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <div className='flex'>
                            <h1 className='text-[20px] font-bold text-white capitalize not-italic drop-shadow-[0_4px_4px_rgba(0,0,0,50)]'>
                                {item.name}
                            </h1>
                        </div>
                        <div className='relative flex text-left p-2 '>
                            <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-lg"></div>

                            <p className='text-[14px] font-medium  text-white not-italic drop-shadow-[0_4px_4px_rgba(0,0,0,50)] capitalize'>{item.content}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ServiceCard;