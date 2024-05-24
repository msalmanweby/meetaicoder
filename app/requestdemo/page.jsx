import DemoForm from "../components/DemoForm"
import HeroBanner from "../components/HeroBanner"
import Image from "next/image"
import Notify from "../components/Notify"

export default function page() {
    return (
        <div>
            <Notify />
            <HeroBanner first={"Looking"} mid={"for"} last={"demo?"} pargragraph={"Explore our digital services, Boost your online presenece"} url={"/requestdemo/Hero.jpg"} />
            <div className="flex flex-col items-center">
                <div className="flex flex-col py-20 gap-4 items-center">

                    <h1 className="text-white text-[20px] lg:text-[32px] font-bold text-center  capitalize">Schedule a free demo</h1>
                    <p className="text-white w-screen px-2 sm:px-8 lg:w-[880px] text-center text-[14px] lg:text-[20px] font-medium capitalize">Discover how Our developers can enhance your day? Request a free demo to get answers to your questions and see the benefits in action.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 pb-20 gap-20 items-start self-stretch px-2 lg:px-8">
                    <div className="flex flex-col items-center justify-center">
                        <Image className="w-screen h-full" src={"/requestdemo/users.svg"} height={500} width={500} alt="Meet Ai Coders request Demo" />
                        <p className="text-white text-center text-[14px] w-screen sm:w-full font-medium capitalize">Meet ai coders isn’t just a software development platform, it’s a realm of possibilities. Explore our intensive feature including development, management, support and unlock boundless potential. </p>
                    </div>

                    <DemoForm />
                </div>
            </div>
        </div>
    )
}