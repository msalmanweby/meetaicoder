import React from 'react'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import WorkingStyle from '../components/WorkingStyle'
import Image from 'next/image'
import HeroBanner from '../components/HeroBanner'

export default function page() {
    return (
        <div className='flex flex-col items-center text-center'>
            <HeroBanner first={'creative'} mid={"saas"} last={"agency"} pargragraph={"Explore our digital services, Boost your online presenece"} url={"/services/Hero.jpg"} />
            <div className="flex w-full">
                <div className="flex items-center justify-between w-full px-2 py-4 sm:p-8">
                    <h1 className='text-white font-bold text-[20px] lg:text-[24px] capitalize'>Our Services</h1>
                    <Button type={"action"} value={"Request Demo"} link={'/requestdemo'} />
                </div>
            </div>
            <ServiceCard showAll={true} />
            <div className="flex flex-col justify-center items-center gap-10 p-8">
                <div className="flex">
                    <h1 className='text-white font-bold text-[20px] lg:text-[24px] capitalize border-b-[1px] border-gray-900 py-2'>How we work?</h1>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center xl:flex-row">
                    <WorkingStyle number={"01"} heading={"Request Demo"} detail={"Ready for the innovation being added into your platform or just starting it now...."} />
                    <Image className='rotate-90 xl:rotate-0' src={'/services/rotated-arrow.svg'} width={230} height={230} alt='How meet-ai coders work' />
                    <WorkingStyle number={"02"} heading={"Making Appointment"} detail={"Describe Your problem the way you prefered and provide any supporting documents (if any)"} />
                    <Image className='rotate-90 xl:rotate-0' src={'/services/rotated-arrow.svg'} width={230} height={230} alt='How meet-ai coders work' />
                    <WorkingStyle number={"03"} heading={"Consulting Developer"} detail={"Consult with a developer and discuss the full idea and concept"} />


                </div>
            </div>
        </div>
    )
}



