import React from 'react'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'
import ContactCard from '../components/ContactCard'
import HeroBanner from '../components/HeroBanner'


export default function page() {
    const contactCard = [
        {
            image: "/contact/img1.svg",
            heading: "Customizing Software Solutions",
            content: "We create individual tailored software that meets the unique need for our client "
        },
        {
            image: "/contact/img2.svg",
            heading: "Expertise in the Latest Technologies",
            content: "Our Team of developers have deep knowledge and Experience in the latest Technologies"
        },
        {
            image: "/contact/img3.svg",
            heading: "Support and Maintenance",
            content: "We Do not stop our work after implementing the solution, we provide continuous support and maintenance"
        },
    ]
    return (
        <div>
            <HeroBanner first={'Contact'} mid={"Meet-Ai"} last={"Coders"} pargragraph={"Explore our digital services, Boost your online presenece"} url={"/contact/Hero.jpg"} />

            <div className="flex flex-col gap-4 justify-center items-center py-10">
                <h1 className='text-white text-[24px] sm:text-[32px] font-bold capitalize'>
                    {"Let's Talk with us"}
                </h1>
                <p className='text-white text-[14px] sm:text-[20px] font-medium capitalize'>If you have Questions Feel free to write</p>
            </div>
            <div className='grid relative gap-20 lg:grid-cols-2 items-center justify-center px-8 py-10 '>
                <div className='flex flex-col max-w-[400px]  lg:mx-auto'>

                    <ContactForm />
                </div>
                <div className="flex flex-col gap-4 max-w-[400px] lg:mx-auto">
                    <div className="flex flex-col gap-4 items-center justify-start lg:items-start">
                        <div className="flex">
                            <h1 className='text-[20px] text-white font-bold'>Connect With Experts</h1>
                        </div>
                        <div className='grid mx-auto gap-2 lg:items-start lg:mx-0'>
                            <div className="flex items-center  gap-4">
                                <span><Image src={'/email.svg'} width={24} height={24} alt="email" /></span>
                                <span className='text-[14px] text-white font-medium'>msalman@meetaicoders.com</span>
                            </div>
                            <div className="flex items-center  gap-4 ">
                                <span><Image src={'/phone.svg'} width={24} height={24} alt="email" /></span>
                                <span className='text-[14px] text-white font-medium'>+1 (251) 451-4289</span>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 p-4 bg-gray-800 rounded-[20px]">
                        {contactCard.map((item, index) => (
                            <ContactCard key={index} image={item.image} heading={item.heading} content={item.content} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

