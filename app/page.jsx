import Image from "next/image";
import Button from "./components/Button";
import LogoSlide from "./components/LogoSlide";
import FaqItem from "./components/FaqItem";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AvailableComponent from "./components/AvailableComponent";

import { Circle } from 'lucide-react';
export default function Home() {

  const brands = [
    { src: "/brands/aws.svg", alt: "aws", width: 66.89 },
    { src: "/brands/firebase.svg", alt: "firebase", width: 29.17 },
    { src: "/brands/ibm.svg", alt: "ibm", width: 100 },
    { src: "/brands/llama.svg", alt: "llama", width: 98.31 },
    { src: "/brands/microsoftazure.svg", alt: "microsoft-azure", width: 228.31 },
    { src: "/brands/nextjs.svg", alt: "nextjs", width: 66.27 },
    { src: "/brands/openai.svg", alt: "openai", width: 164.74 },
    { src: "/brands/python.svg", alt: "python", width: 137.74 },
    { src: "/brands/reactnative.svg", alt: "react-native", width: 49.88 },
    { src: "/brands/vitejs.svg", alt: "vite-js", width: 39.84 },

  ]


  return (
    <div className="flex flex-col">

      <AvailableComponent />


      <div className="flex flex-col gap-2 px-4 py-2 items-center justify-center">
        <p className="text-white text-center text-[20px] font-bold capitalize leading-normal sm:text-2xl pb-2 sm:p-4 sm:mb-0">EMPOWERING YOUR VISION WITH EXPERT SOFTWARE CONSULTING AND DEVELOPMENT</p>
        <p className="text-white text-center text-[14px] font-normal leading-normal mx-[2%] sm:mx-[5%] lg:mx-[7%] xl:mx-[15%] 2xl:mx-[19%]">Welcome to Meet-Ai Coders, Your one-stop destination for AI-powered applications. From creation to deployment everything is done from scratch. Seamlessly revolutionize your business with expert in advanced algorithms and techniques. Experience unparalleled agility, scalability, and performance as you embark on your journey to redefine what`s possible with AI.
        </p>
      </div>


      <div className="flex items-center justify-center gap-6 p-6 mb-6">
        <Button value="Request Demo" type="action" link={"/"} />
        <Button value="Learn More" type="info" link={'/about'} />
      </div>

      <div className=" bg-white h-[0.2px] mx-[5%] sm:mx-[5%] md:mx-[5%] lg:mx-[7%] xl:mx-[15%] 2xl:mx-[19%] mt-6"></div>

      {/* <div className="hidden sm:flex whitespace-nowrap items-center justify-center py-8">
        <div className="flex gap-16 mt-10">
          {brands.map((item, index) => (
            <Image key={index} src={item.src} alt={item.alt} width={item.width} height={40} />
          ))}
        </div>
      </div> */}

      <div className="flex flex-col sm:flex-row sm:gap-8 sm:pt-8 items-center justify-center">

        <div className="flex flex-col py-8 px-4 justify-center items-center gap-8">
          <Image className="rounded-lg " src="/services/Healthcare Management Agents.png" alt="Healthcare Management Agents Service" width={320} height={320} />
          <span className="text-white">Healthcare Management Agents</span>
        </div>
        <div className="flex flex-col py-8 px-4 justify-center items-center gap-8">
          <Image className="rounded-lg " src="/services/Virtual Travel Booking Agents.png" alt="Virtual Travel Booking Agents Service" width={320} height={320} />
          <span className="text-white">Virtual Travel Booking Agents</span>
        </div>
        <div className="flex flex-col py-8 px-4 justify-center items-center gap-8">
          <Image className="rounded-lg " src="/services/Automated Financial Investing Agents.png" alt="Automated Financial Investing Agents Service" width={320} height={320} />
          <span className="text-white">Automated Financial Investing Agents</span>
        </div>

      </div>
      <div className="flex p-4 items-center justify-center gap-6">
        <Button value="Checkout Services" type="action" link={'/services'} />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 gap-4 mt-4 mb-4">


        <div className="flex flex-col text-white items-center">

          <p className="text-[40px] text-center font-bold">Curious Mind?</p>
          <p className="text-[14px] text-center font-normal max-w-[400px] mx-auto">You have questions. I have answers. Here are some of those questions I often get. If you can’t find your answer, be sure to reach out!</p>

        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="text-[22px] text-white  font-semibold p-2">Frequestly Asked Questions</p>
            <Image className="w-[24px] h-[24px]" src={'/faq.svg'} width={48} height={48} alt={'Meet-Ai Coder Faqs'} />
          </div>
          <FaqItem />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 gap-4 mt-4 mb-4">
        <div className="flex flex-col text-white text-center">
          <h1 className="text-2xl capitalize text-center p-4 max-w-[400px] mx-auto">
            Elevate your brand to next Level with artificial intelligence
          </h1>
          <p className="p-4 max-w-[320px] mx-auto">Tell me about your brand, let me assess and let’s make you something cool</p>
          <div className="flex flex-col p-2 items-center">
            <div>
              <div className="flex gap-4 p-2">
                <span><Image src={'/email.svg'} width={24} height={24} alt="email" /></span>
                <span> salman@meetaicoder.com
                </span>
              </div>
              <div className="flex gap-4 p-2  ">
                <span><Image src={'/phone.svg'} width={24} height={24} alt="email" /></span>
                <span>+1 (251) 451-4289
                </span>
              </div>
            </div>
          </div>
        </div>


        <ContactForm />


      </div>


    </div>


  )
}