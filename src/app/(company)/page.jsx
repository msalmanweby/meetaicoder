import Image from "next/image";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import AvailableComponent from "../components/AvailableComponent";
import HeroBanner from "../components/HeroBanner";
import ServiceCard from "../components/ServiceCard";
import Faq from "../components/FaqItem";
import Notify from "../components/Notify";


export default function Home() {



  return (
    <div>
      <Notify />
      <HeroBanner first={'Meet'} mid={"AI"} last={"Coders"} pargragraph={"Explore our digital services, Boost your online presenece"} url={"/bg.jpg"} />


      <div className="flex flex-col gap-2 my-10 items-center justify-center px-2 sm:px-8">
        <p className="text-white text-center text-[24px] sm:text-[32px] font-bold capitalize leading-normal">empowering your vision with LLm powered applications</p>
        <p className="text-white text-[16px] sm:text-[20px] text-center font-normal w-full sm:w-[640px] capitalize">Welcome to Meet-AI Coders, Your one-stop destination for AI-powered applications. From creation to deployment everything is done from scratch. Seamlessly revolutionize your business with expert in advanced algorithms and techniques. Experience unparalleled agility, scalability, and performance as you embark on your journey to redefine what`s possible with AI.
        </p>
      </div>





      <AvailableComponent />
      <div className="flex items-center justify-center gap-6 p-6 mb-6">
        <Button value="Request Demo" type="action" link={"/requestdemo"} />
        <Button value="Learn More" type="info" link={'/about'} />
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-8 sm:pt-8 items-center justify-center">
        <ServiceCard showAll={false} />

      </div>
      <div className="flex p-4 items-center justify-center gap-6">
        <Button value="Checkout Services" type="action" link={'/services'} />
      </div>
      <div className="flex flex-col my-10 gap-10 px-2 sm:px-8">

        <div className="flex flex-col text-white items-center">

          <p className="text-[24px] sm:text-[32px] text-center font-bold">Curious Mind?</p>
          <p className="text-[16px] sm:text-[20px] text-center font-normal w-full sm:w-[640px]">You have questions. I have answers. Here are some of those questions I often get. If you can’t find your answer, be sure to reach out!</p>

        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-center gap-2">
            <p className=" text-[24px] sm:text-[32px] text-white  font-bold">Frequestly Asked Questions</p>
          </div>
          <Faq />
        </div>
      </div >
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
                <span> info@meetaicoders.com
                </span>
              </div>
              <div className="flex gap-4 p-2  ">
                <span><Image src={'/phone.svg'} width={24} height={24} alt="email" /></span>
                <span>+1 (251) 314-2234
                </span>
              </div>
            </div>
          </div>
        </div>


        <ContactForm />


      </div>


    </div >


  )
}