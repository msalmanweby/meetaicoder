import Image from "next/image";
import Button from "./components/Button";
import LogoSlide from "./components/LogoSlide";
import FaqItem from "./components/FaqItem";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

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

  const services = [
    { name: "Q&A with Platform" },
    { name: "Human Voice Generation" },
    { name: "Action Taking Agents" }
  ]
  return (




    <div>
      <div className="flex px-4 py-2 items-center justify-center">
        <div className="flex flex-row gap-2">
          <Image className="animate-ping w-auto h-auto" src='/online.svg' width={8} height={8} alt="Meet-AI coder available" />
          <p className="leading-normal capitalize font-medium text-[14px] text-white">Available for work</p>
        </div>
      </div>

      <div className="flex px-4 py-2 items-center justify-center">
        <p className="text-white text-center text-[22px] font-bold capitalize leading-normal">Empowering Your Vision with Expert Software Consulting and Development</p>
      </div>

      <div className="flex px-4 py-2 items-center justify-center">
        <p className="text-white text-center text-[14px] font-normal leading-normal">Meet-AI Coders are passionate about harnessing the power of artificial intelligence to transform businesses. Our seasoned team of AI consultants and developers collaborates with you to unlock new possibilities. Whether you’re exploring machine learning models, natural language processing, or computer vision applications, we’re here to guide you. From ideation to deployment, we empower your vision with cutting-edge AI solutions. Let’s build an intelligent future together!</p>
      </div>

      <div className="flex p-4 items-center justify-center gap-6">
        <Button value="Ask Question" type="action" />
        <Button value="About Me" type="info" />
      </div>

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
        <Button value="See More" type="action" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col text-white items-center justify-center p-4">
          <p className="text-[14px] text-center font-normal">Frequestly Asked Questions</p>
          <p className="text-[40px] text-center font-bold">Curious Mind?</p>
          <p className="text-[14px] text-center font-normal">You have questions. I have answers. Here are some of those questions I often get. If you can’t find your answer, be sure to reach out!</p>
        </div>
        <FaqItem />
      </div>
      <div>
        <div className="flex flex-col text-white text-center">
          <h1 className="text-xl capitalize text-center p-4">
            Elevate your brand to next Level with artificial intelligence
          </h1>
          <p className="p-4">Tell me about your brand, let me assess and let’s make you something cool</p>
          <div className="flex flex-col p-4">
            <p>
              E: salman@meetaicoder.com
            </p>
            <p>
              P: +1 (251) 451-4289
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
      <div className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500">
        <p>© 2024 Meet-AI Coder. All rights reserved.</p>
      </div>
    </div>


  )
}