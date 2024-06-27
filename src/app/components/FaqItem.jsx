'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col px-2 py-4 lg:w-[800px] '>
            <div className='flex justify-between items-start'>
                <div className=' text-white text-left text-md sm:text-lg font-semibold capitalize'>
                    {question}
                </div>
                <button className='' onClick={toggleOpen}>
                    {isOpen ? <Minus className='text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full ' /> : <Plus className='text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full' />}
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <p className='text-gray-300 text-sm sm:text-md font-medium py-2 capitalize'>{answer}</p>
            </div>
        </div>
    );
}

function Faq() {
    const FAQS = [
        { question: "What services do you offer?", answer: " We offer LLM powered applications based on your needs of any platform like Android, iOS, Web, etc." },
        { question: "How much do you charge?", answer: "Price always depends on the client's individual needs. Reach out with your specific needs, so consulting developer can give you an accurate quote!" },
        { question: "Do I have to have an idea for a design?", answer: "It's okay to not have it all figured out initially. Our team can help in the ideating part!" },
        { question: "What technologies do you specialize in?", answer: "We specialize in a wide range of technologies including but not limited to Django, Flask, Firebase, ReactJs, NextJs, React Native." },
        { question: "How long does it take to develop a typical application?", answer: "It's okay to not have it all figured out initially. Our team can help in the ideating part!" },
        { question: "Do I have to have an idea for a design?", answer: " The development timeline varies depending on the complexity and features of the application. We can provide a more accurate estimate once we discuss your project requirements." },
        { question: "Can you integrate third-party APIs into the application?", answer: "Absolutely! We have experience integrating a wide range of third-party APIs for various functionalities such as payment gateways, social media login, mapping services, and more." },
        { question: "How do you ensure the security of the applications you develop?", answer: " Security is a top priority for us. We implement industry-standard security measures such as data encryption, secure authentication methods, and regular security audits to safeguard your application against potential threats." },
        { question: "Can you provide maintenance and support after the application is developed?", answer: "Yes, we offer maintenance and support services to ensure your application runs smoothly post-launch. We can discuss the specifics of our support plans based on your needs." },
    ];

    return (
        <div className='grid items-center justify-center '>
            {FAQS.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}

export default Faq;
