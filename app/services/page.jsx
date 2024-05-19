import React from 'react'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import WorkingStyle from '../components/WorkingStyle'
import Image from 'next/image'

export default function page() {
    return (
        <div className='flex flex-col items-center text-center'>
            <div className="flex flex-col bg-[url('/services/Hero.jpg')] bg-cover bg-center items-center justify-center h-[286px] lg:h-[768px] w-full">
                <div className='flex flex-row gap-2 drop-shadow-[0_4px_4px_rgba(0,0,0,50)]'>

                    <h1 className='text-[32px] font-bold capitalize bg-gradient-to-l from-orange-500 to-red-500 inline-block text-transparent bg-clip-text'>Creative</h1>
                    <h1 className='text-[32px] text-white font-normal capitalize '>SaaS</h1>
                    <h1 className='text-[32px] font-bold capitalize bg-gradient-to-l from-orange-500 to-red-500 inline-block text-transparent bg-clip-text'>Agency</h1>
                </div>
                <div className="flex flex-row text-[20px] font-normal text-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,50)]">
                    <p>Explore our digital services, Boost your online presenece </p>
                </div>
            </div>
            <div className="flex w-full">
                <div className="flex items-center justify-between w-full px-2 py-4 sm:p-8">
                    <h1 className='text-white font-bold text-[20px] lg:text-[24px] capitalize'>Our Services</h1>
                    <Button type={"action"} value={"Request Demo"} />
                </div>
            </div>
            <ServiceCard />
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
