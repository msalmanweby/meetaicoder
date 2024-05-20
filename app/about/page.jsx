import React from 'react'
import Image from 'next/image'
import Button from '../components/Button'
import Testimonials from '../components/Testimonials'
import LatestProjects from '../components/LatestProjects'
import HeroBanner from '../components/HeroBanner'


function page() {

    const myTestimnials = [
        { score: "100%", title: "Client Satifaction" },
        { score: "100+", title: "Projects Completed" },
        { score: "5+", title: " Years Experience" },
        { score: "100%", title: "On-Time Delivery" },
        { score: "10/10", title: "Innovation Index" },
    ]

    return (
        <div>
            <HeroBanner first={'Transform'} mid={"With"} last={"Innovation"} pargragraph={"Explore our digital services, Boost your online presenece"} url={"/about/Hero.jpg"} />

            <div className='flex flex-col items-center justify-center text-white text-center gap-4 py-20'>
                <div className='flex text-white text-center text-[18px] lg:text-[24px] font-bold'>
                    <h1 className='capitalize'>Imagine a future where technology Helps!</h1>
                </div>
                <div className='flex max-w-[720px] text-center px-2'>
                    <p className='text-[12px] md:text-[14px] capitalize'>
                        Inspired by the potential of technology to shape a better tomorrow, our mission is to foster a future where innovation is not just a buzzword but a tangible force for good. We believe in harnessing the power of technology to uplift individuals, businesses, and communities alike, creating a world where every interaction is infused with efficiency, connectivity, and opportunity.
                    </p>
                </div>
            </div>
            <div className='flex mx-2 sm:mx-6 sm:h-[120px] p-3 justify-between sm:justify-evenly items-center bg-gradient-to-r from-orange-500 to-red-500 lg:px-6 rounded-lg'>
                {myTestimnials.map((item, index) => (
                    <Testimonials key={index} score={item.score} title={item.title} />
                ))}
            </div>

            <LatestProjects />
            <div className='flex flex-col items-center justify-center text-white text-center gap-4 py-20'>
                <div className='flex text-white text-center text-[18px] lg:text-[24px] font-bold'>
                    <h1 className='capitalize'>Let’s Grab your Phone and talk about your projects needs</h1>
                </div>
                <div className='flex max-w-[800px] text-center px-2'>
                    <p className='text-[12px] md:text-[14px] capitalize'>
                        {"Whether it's refining your app's user interface, optimizing backend processes, or exploring innovative AI integrations, our conversation is tailored to uncovering the precise solutions your projects demand. Together, we'll navigate through the intricacies of your goals, ensuring every aspect aligns seamlessly with your vision and objectives. So, let's embark on this journey, leveraging technology to transform your ideas into impactful realities."}
                    </p>
                </div>
                <Button type={"action"} value={"Contact Us"} link={'/contact'} />
            </div>

        </div>


    )
}

export default page
