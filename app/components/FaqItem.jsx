'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col border-b-2 border-b-orange-500  p-4'>
            <button className='flex text-white text-sm font-bold justify-between items-center' onClick={toggleOpen}>
                {question} {isOpen ? <Minus /> : <Plus />}
            </button>
            {isOpen && <p className='text-white text-sm py-2'>{answer}</p>}
        </div>
    );
}

function Faq() {
    const FAQS = [
        { question: "What services do you offer?", answer: "My services include: logo design, brand identity design (with brand guidelines), web design / UI design, creative ad design & more." },
        { question: "How much do you charge?", answer: "Price always depends on the client's individual needs. Reach out with your specific needs, so I can give you an accurate quote!" },
        { question: "Do you work with international clients?", answer: "Yes! I'm quite experienced in remote work with international clients." },
        { question: "Do I have to have an idea for a design?", answer: "It's okay to not have it all figured out initially. I can help in the ideating part!" },
    ];

    return (
        <>
            {FAQS.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
        </>
    );
}

export default Faq;
